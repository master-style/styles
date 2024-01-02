'use client'

import { GridsBg } from 'websites/components/GridsBg'
import Article from 'websites/components/Article'
import DocHeader from '~/components/DocHeader'
import DocFooter from '~/components/DocFooter'
import ListAuthors from 'websites/components/ListAuthors'
import { getDictionary } from 'websites/dictionaries'
import dayjs from 'dayjs'
import TimeAgo from 'websites/components/TimeAgo'

export default function Layout(props: any) {
    const $ = getDictionary(props.params.locale)
    const date = new Date(props.metadata.date)
    // const formattedDate = dayjs(date).format('dddd, MMMM D YYYY')
    return <>
        <DocHeader locale={props.params.locale} contained />
        <GridsBg className="abs h:352 left:0 top:97 top:60@lg w:full z:-1" />
        <div className='max-w:screen-md mb:-20 mt:180 mx:auto'>
            <div className='fg:accent font:semibold mb:10 text:center'>
                {props.metadata.date && <TimeAgo timestamp={props.metadata.date} locale={props.params.locale} />}
            </div>
            <h1 className='bg:text font:64@sm font:heavy gradient(180deg,gray-60,gray-90) gradient(180deg,white,gray-40)@dark ls:-.5 m:0 text-fill:transparent text:center'>
                {$(props.metadata.title)}
            </h1>
            <p className='text:18 fg:light max-w:screen-sm mt:3x mx:auto text:center'>{$(props.metadata.description)}</p>
            {props.metadata.authors && <ListAuthors className="center-content gap:30 mt:50">{props.metadata.authors}</ListAuthors>}
        </div>
        <main className='app-doc-main max-w:screen-sm'>
            <Article className="mb:80 mt:0>:first" prose>
                {props.children}
            </Article>
        </main>
    </>


}