import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Language Service',
    description: 'The language service reference for Master CSS.',
    category: 'Package',
    filename: fileURLToPath(import.meta.url)
})

export default metadata