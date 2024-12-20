import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Extractor',
    description: 'Master CSS static extractor for various raw text extraction.',
    category: 'Package',
    filename: fileURLToPath(import.meta.url)
})

export default metadata