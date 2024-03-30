import { type CompletionItem, CompletionItemKind } from 'vscode-languageserver-protocol'
import cssDataProvider from './css-data-provider'
import { Layer, MasterCSS, Variable, generateCSS, isCoreRule } from '@master/css'
import { getCSSDataDocumentation } from './get-css-data-documentation'
import sortCompletionItems from './sort-completion-items'
import type { IValueData } from 'vscode-css-languageservice'

export default function getValueCompletionItems(css: MasterCSS = new MasterCSS(), qKey: string, qValue: string): CompletionItem[] {
    const nativeProperties = cssDataProvider.provideProperties()
    const completionItems: CompletionItem[] = []
    const nativeKey = css.Rules.find(({ keys }) => keys.includes(qKey))?.id
    const nativePropertyData = nativeProperties.find(({ name }) => name === nativeKey)
    const generateVariableCompletionItem = (variable: Variable, { scoped } = { scoped: false }): CompletionItem => {
        const eachNativePropertyData = nativeProperties.find((x: { name: string }) => x.name === variable.group) || nativePropertyData
        const appliedValue = scoped ? variable.key : variable.name
        const documentation = getCSSDataDocumentation(eachNativePropertyData, {
            generatedCSS: generateCSS([qKey + ':' + appliedValue], css),
            docs: eachNativePropertyData?.name || 'variables'
        })
        if (variable.type === 'color') {
            if (Object.keys(variable.modes || {}).length) {
                return {
                    kind: CompletionItemKind.Color,
                    label: variable.name,
                    documentation,
                    detail: `${variable.name}`
                }
            } else {
                // todo: packages/css should support getTextByVariable(variable)
                const configKey = 'variables.' + (variable.group ? variable.group + '.' + variable.key : variable.name)
                return {
                    label: variable.name,
                    // detail is shown in the detail pane
                    // todo: variable.token should be recorded as original config variable
                    detail: configKey,
                    // documentation is shown in the hover
                    // todo: should convert and space to rgba
                    documentation: {
                        kind: 'markdown',
                        value: ((variable.space && variable.value)
                            // vscode doesn't support rgba(0 0 0/.5) in detail
                            ? `${variable.space}(${variable.value.split(' ').join(',')})`
                            : variable.value) + '\n\n' + documentation?.value
                    },
                    kind: CompletionItemKind.Color,
                    sortText: variable.name.replace(/(.+?)-(\d+)/, (match, prefix, num) =>
                        prefix + '-' + ('00000' + num).slice(-5)),
                }
            }
        } else if (variable.type === 'number') {
            return {
                kind: CompletionItemKind.Value,
                label: variable.name,
                documentation,
                detail: variable.name
            }
        } else {
            return {
                kind: CompletionItemKind.Value,
                label: variable.name,
                documentation,
                detail: variable.value || variable.name
            }
        }
    }

    for (const EachRule of css.Rules) {
        /**
         * Scoped variables
         * @example box: + content -> box-sizing:content
         */
        if (EachRule.definition.key === qKey || EachRule.definition.subkey === qKey || EachRule.definition.ambiguousKeys?.includes(qKey)) {
            for (const variableName in EachRule.variables) {
                if (completionItems.find(({ label }) => label === variableName)) continue
                const variable = EachRule.variables[variableName]
                const completionItem = generateVariableCompletionItem(variable, { scoped: true })
                completionItem.label = variableName
                completionItem.detail = '(scope variable) ' + completionItem.detail
                completionItems.push(completionItem)
            }
        }
        /**
         * Ambiguous values
         * @example text: -> center, left, right, justify
         * @example t: -> center, left, right, justify
         */
        if (EachRule.definition.ambiguousKeys?.includes(qKey) && EachRule.definition.ambiguousValues?.length) {
            const nativePropertyData = nativeProperties.find((x: { name: string }) => x.name === EachRule.id)
            for (const ambiguousValue of EachRule.definition.ambiguousValues) {
                if (typeof ambiguousValue !== 'string') continue
                const nativeValueData = nativePropertyData?.values?.find((x: { name: string }) => x.name === ambiguousValue)
                const isNative = EachRule.definition.layer && [Layer.Native, Layer.NativeShorthand].includes(EachRule.definition.layer)
                completionItems.push({
                    label: ambiguousValue,
                    kind: CompletionItemKind.Value,
                    sortText: ambiguousValue,
                    documentation: getCSSDataDocumentation({
                        ...(nativeValueData || {} as IValueData),
                        // use nativePropertyData.reference because nativeValueData does not have references
                        references: nativePropertyData?.references
                    }, {
                        generatedCSS: generateCSS([qKey + ':' + ambiguousValue], css),
                        docs: isCoreRule(EachRule.id) && EachRule.id
                    }),
                    detail: isNative ? EachRule.id + ': ' + ambiguousValue : ambiguousValue
                })
            }
        }
    }

    /**
     * Native values
     */
    if (nativeKey) {
        nativePropertyData?.values
            ?.forEach(value => {
                if (completionItems.find(x => x.label === value.name)
                    // should ignore 100, 200 ... 900
                    || nativePropertyData.name === 'font' && typeof +value.name === 'number'
                    // should ignore values ​​containing blanks
                    || value.name.includes(' ')
                ) return
                completionItems.push({
                    label: value.name,
                    kind: CompletionItemKind.Value,
                    sortText: value.name.startsWith('-')
                        ? 'zz' + value.name.slice(1)
                        : value.name,
                    documentation: getCSSDataDocumentation({
                        ...value,
                        // use nativePropertyData.reference because nativeValueData does not have references
                        references: nativePropertyData?.references
                    }, {
                        generatedCSS: generateCSS([qKey + ':' + value.name], css),
                        docs: nativeKey
                    }),
                    detail: nativeKey + ': ' + value.name
                })
            })
    }
    // global variables
    for (let variableName in css.variables) {
        if (variableName.startsWith('-')) continue
        const conflicted = completionItems.find(({ label }) => label === variableName)
        const variable = css.variables[variableName]
        if (conflicted) {
            variableName = `$(${variableName})`
        }
        const completionItem = generateVariableCompletionItem(variable)
        completionItem.label = variableName
        completionItem.sortText = 'zzzz' + variableName
        completionItems.push(completionItem)
    }

    return sortCompletionItems(completionItems)
}