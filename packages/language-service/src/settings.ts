import { Config } from '@master/css'

const settings: Settings = {
    languages: [
        'html',
        'php',
        'javascript',
        'typescript',
        'javascriptreact',
        'typescriptreact',
        'vue',
        'svelte',
        'rust'
    ],
    classMatch: [
        '(class(?:Name)?\\s?=\\s?)((?:"[^"]+")|(?:\'[^\']+\')|(?:`[^`]+`))',
        '(class(?:Name)?={)([^}]*)}',
        '(?:(\\$|(?:(?:element|el|style)\\.[^\\s.`]+)`)([^`]+)`)',
        '(style\\.(?:.*)\\()([^)]*)\\)',
        '(classList.(?:add|remove|replace|replace|toggle)\\()([^)]*)\\)',
        '(template\\s*\\:\\s*)((?:"[^"]+")|(?:\'[^\']+\')|(?:`[^`]+`))',
        '(?<=styles\\s*(?:=|:)\\s*{[\\s\\S]*)([^\']*)(\'[^\']*\')',
        '(?<=styles\\s*(?:=|:)\\s*{[\\s\\S]*)([^"]*)("[^"]*")',
        '(?<=styles\\s*(?:=|:)\\s*{[\\s\\S]*)([^`]*)(`[^`]*`)'
    ],
    exclude: ['**/.git/**', '**/node_modules/**', '**/.hg/**'],
    hintSyntaxCompletions: true,
    inspectSyntax: true,
    renderSyntaxColors: true
}

export default settings

export declare type Settings = {
    languages?: string[]
    classMatch?: string[]
    exclude?: string[]
    hintSyntaxCompletions?: boolean
    inspectSyntax?: boolean
    renderSyntaxColors?: boolean
    config?: Config
}