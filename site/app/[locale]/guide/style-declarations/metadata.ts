import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Style Declarations',
    description: 'Master CSS covers all native CSS features with a structured syntax and simplifies CSS with smart rules.',
    category: 'Syntax Tutorial',
    order: 1,
    filename: fileURLToPath(import.meta.url)
})

export default metadata