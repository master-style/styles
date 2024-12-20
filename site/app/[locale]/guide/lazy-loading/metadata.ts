import { fileURLToPath } from 'url'
import define from 'internal/utils/metadata'

const metadata = define({
    title: 'Lazy Loading',
    description: 'Speed up initial page loads by lazy loading the runtime engine.',
    category: 'Production Optimization',
    disabled: true,
    filename: fileURLToPath(import.meta.url)
})

export default metadata