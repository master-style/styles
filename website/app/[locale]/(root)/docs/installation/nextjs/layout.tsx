import Tabs, { Tab, TabBadge } from 'websites/components/Tabs'
import { getDictionary } from 'websites/dictionaries'
import DocLayout from '~/layouts/doc'
import LogoSvg from '~/public/images/frameworks/nextjs.svg?inlineSvg'

export default function Layout(props: any) {
    const $ = getDictionary(props.params.locale)
    return (
        <DocLayout {...props}
            metadata={{
                title: 'Set up Master CSS in Next.js',
                description: 'Guide to setting up Master CSS in your Next.js project.',
                category: 'Installation'
            }}
            backOnClickCategory='/docs/installation'
            icon={<LogoSvg width={100} className="invert(1)@dark" />}
            titleBig
        >
            <Tabs className="mb:30">
                <Tab href='/docs/installation/nextjs'>{$('Progressive Rendering')} <TabBadge>{$('Recommanded')}</TabBadge></Tab>
                <Tab href='/docs/installation/nextjs/runtime-rendering'>{$('Runtime Rendering')}</Tab>
                <Tab href='/docs/installation/nextjs/static-extraction'>{$('Static Extraction')}</Tab>
            </Tabs>
            {props.children}
        </DocLayout >
    )
}