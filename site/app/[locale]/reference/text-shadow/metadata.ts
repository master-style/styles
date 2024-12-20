import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Text Shadow',
    description: 'Adding shadows to text.',
    category: 'Syntax',
    unfinished: true,
    canIUseLink: 'https://caniuse.com/?search=text-shadow',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow',
    filename: fileURLToPath(import.meta.url)
})

export default metadata