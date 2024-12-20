import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Variable',
    description: 'CSS variables defined specific values to be reused throughout a document.',
    category: 'Syntax',
    mdn: 'Using_CSS_custom_properties',
    canIUse: 'CSS Custom Properties',
    unfinished: true,
    canIUseLink: 'https://caniuse.com/?search=custom-properties',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties',
    filename: fileURLToPath(import.meta.url)
})

export default metadata