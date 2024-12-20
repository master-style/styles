import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Position',
    description: 'Setting an element is positioned in a document.',
    category: 'Syntax',
    unfinished: true,
    canIUseLink: 'https://caniuse.com/?search=position',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
    filename: fileURLToPath(import.meta.url)
})

export default metadata