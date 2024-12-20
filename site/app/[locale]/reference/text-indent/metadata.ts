import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Text Indent',
    description: 'Setting indentation of the first line.',
    category: 'Syntax',
    unfinished: true,
    canIUseLink: 'https://caniuse.com/?search=text-indent',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent',
    filename: fileURLToPath(import.meta.url)
})

export default metadata