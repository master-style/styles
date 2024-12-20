import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Font',
    description: 'Setting font properties of an element.',
    category: 'Syntax',
    unfinished: true,
    canIUseLink: 'https://caniuse.com/?search=font',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font',
    filename: fileURLToPath(import.meta.url)
})

export default metadata