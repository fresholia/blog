import React from 'react'
import Head from 'next/head'

import Style from 'styles/index.module.scss'

import { indexHeader, about, langs } from 'exports/PageContents'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>ana sayfa - enes akıllıok</title>
      </Head>

      <div className={Style.wrapper}>
        <h2>{indexHeader}</h2>
        <h4>Yazılımla ilgilenmiyorsan yanlış sayfadasın.</h4>
        <div className={Style.content}>
          <p>{about}</p>
        </div>

        <hr />
        
        <h3>Bildiğim Yazılım Dilleri ve Alanlar</h3>
        <div className={Style.langs}>
          {
            Object.keys(langs).map( (data) => {
              return (
                <div className={Style.lang}>
                  {langs[data]}
                </div>
              )
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
}
