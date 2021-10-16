import React from 'react'
import Head from 'next/head'

import Style from 'styles/blog.module.scss'

import { mediumUsername } from 'exports/pageContents'

export default function Blog({data}) {
    return (
        <React.Fragment>
            <Head>
                <title>blog - enes akıllıok</title>
            </Head>
            <div className={Style.blogWrapper}>
                <h2>işte yazılarım</h2>
                <br/>
                {
                    Object.keys(data.dataMedium).map(value => {
                        const row = data.dataMedium[value]
                        return (
                            <a href={row.link} className={Style.card}  >
                                <span>{row.title}</span>
                            </a>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export async function getStaticProps({params}) {
    const request = await fetch(`https://mediumpostsapi.herokuapp.com/?usermedium=${mediumUsername}`)
    const data = await request.json()

    return {
        props: {data}
    }
}