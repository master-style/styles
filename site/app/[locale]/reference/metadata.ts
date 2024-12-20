import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'API Reference',
    description: 'This section provides detailed reference documentation for working with Master CSS.',
    category: 'Overview',
    filename: fileURLToPath(import.meta.url)
})

export default metadata