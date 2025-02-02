import defineVisitors from '../utils/define-visitors'
import resolveContext from '../utils/resolve-context'
import findLoc from '../utils/find-loc'
import { parseNodeRecursive } from '../utils/parse-node-recursive'
import filterCollisionClasses from '../functions/filter-collision-classes'
import createRule from '../create-rule'
import settingsSchema from '../settings-schema'

export default createRule({
    name: 'class-collision-detection',
    meta: {
        type: 'layout',
        docs: {
            description: 'Avoid applying classes with the same CSS declaration'
        },
        messages: {
            collisionClass: '{{message}}',
        },
        fixable: 'code',
        schema: [settingsSchema]
    },
    defaultOptions: [],
    create(context) {
        const { settings, css } = resolveContext(context)
        const visitNode = (node, arg = null) => {
            parseNodeRecursive(
                node,
                arg,
                (classNames, node, originalClassNamesValue, start, end) => {
                    const sourceCode = context.sourceCode
                    const sourceCodeLines = sourceCode.lines
                    const nodeStartLine = node.loc.start.line
                    const nodeStartColumn = node.loc.start.column
                    const nodeEndLine = node.loc.end.line
                    const nodeEndColumn = node.loc.end.column
                    // todo css
                    const collisionClassesRecord = filterCollisionClasses(classNames, css)
                    for (const className in collisionClassesRecord) {
                        const collisionClasses = collisionClassesRecord[className]
                        const collisionClassNamesMsg = collisionClasses.map(x => `"${x}"`).join(' and ')
                        let fixClassNames = originalClassNamesValue
                        for (const collisionClassName of collisionClasses) {
                            const regexSafe = collisionClassName.replace(/(\\|\.|\(|\)|\[|\]|\{|\}|\+|\*|\?|\^|\$|\||\/)/g, '\\$1')
                            fixClassNames = fixClassNames.replace(new RegExp(`\\s+${regexSafe}|${regexSafe}\\s+`), '')
                        }

                        context.report({
                            loc: findLoc(className, sourceCodeLines, nodeStartLine, nodeStartColumn, nodeEndLine, nodeEndColumn),
                            messageId: 'collisionClass',
                            data: {
                                message: `"${className}" applies the same CSS declarations as ${collisionClassNamesMsg}.`,
                            },
                            fix: function (fixer) {
                                return fixer.replaceTextRange([start, end], fixClassNames)
                            }
                        })
                    }
                },
                false,
                false,
                settings.ignoredKeys,
                context
            )
        }
        return defineVisitors({ context, settings }, visitNode)
    },
})