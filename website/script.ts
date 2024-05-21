import fg from 'fast-glob'
import { Metadata } from 'websites/types/Metadata'
import path from 'upath'
// import docsInstallationMetadata from './app/[locale]/docs/installation/(tabs)/metadata'
import { AbsoluteTemplateString } from 'next/dist/lib/metadata/types/metadata-types.js'
import { writeFile } from 'fs'
import categories from './categories.json'

export declare type Page = { metadata: Metadata, pathname: string }

(async () => {
    const generatePages = async (pattern: string | string[]) => {
        return await Promise.all(
            fg.sync(pattern)
                .map(async (eachPath) => {
                    return {
                        metadata: (await import(eachPath)).default,
                        pathname: '/' + path.relative('./app/[locale]', path.dirname(
                            eachPath
                                .replace(/\/\(.*\)/g, '')
                        ))
                    }
                })
        )
    }

    const pages: Page[] = (await generatePages('./app/[locale]/**/*/metadata.ts'))
        .sort((a, b) => {
            const titleA = ((a.metadata.title as AbsoluteTemplateString)?.absolute || a.metadata.title as string).toLowerCase()
            const titleB = ((b.metadata.title as AbsoluteTemplateString)?.absolute || b.metadata.title as string).toLowerCase()

            if (titleA < titleB) {
                return -1
            }
            if (titleA > titleB) {
                return 1
            }
            return 0
        })
    const pageCategories = pages.reduce((categories: any[], eachPage: any) => {
        const eachPageCategoryName = eachPage?.metadata?.category
        if (eachPageCategoryName) {
            const existingCategory = categories.find((eachCategory: any) => eachCategory.name === eachPageCategoryName)
            if (existingCategory) {
                existingCategory.pages.push(eachPage)
                existingCategory.pages.sort((a: any, b: any) => {
                    if (a.metadata.order !== undefined && b.metadata.order !== undefined) {
                        return a.metadata.order - b.metadata.order
                    } else if (a.metadata.order !== undefined) {
                        return -1
                    } else if (b.metadata.order !== undefined) {
                        return 1
                    } else {
                        return 0
                    }
                })
            } else {
                categories.push({ name: eachPageCategoryName, pages: [eachPage] })
            }
        }
        return categories
    }, [])
        .sort((a, b) => {
            const indexA = categories.indexOf(a.name)
            const indexB = categories.indexOf(b.name)

            if (indexA === -1 && indexB === -1) {
                return a.name.localeCompare(b.name)
            }

            if (indexA === -1) {
                return 1
            }

            if (indexB === -1) {
                return -1
            }

            return indexA - indexB
        })

    writeFile('./data/page-categories.json', JSON.stringify(pageCategories, null, 4), () => {
        console.log('page-categories.json written')
    })

    writeFile('./data/pages.json', JSON.stringify(pages, null, 4), () => {
        console.log('pages.json written')
    })

})()