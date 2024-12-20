import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Contain',
    description: 'Providing performance benefits by limiting calculations of layout.',
    category: 'Syntax',
    unfinished: true,
    canIUseLink: 'https://caniuse.com/?search=contain',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/contain',
    filename: fileURLToPath(import.meta.url)
})

export default metadata