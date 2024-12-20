import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Migrating from Tailwind CSS',
    description: 'A guide on how to refactor Tailwind CSS using Master CSS.',
    category: 'Migration',
    vercelOG: true,
    filename: fileURLToPath(import.meta.url)
})

export default metadata