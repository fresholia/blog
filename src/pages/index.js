import React from 'react'
import Head from 'next/head'

import { Wrapper } from 'layouts'

export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <Head>
          <title>Home - enesakilliok</title>
          <meta name="title" content="Home - enesakilliok" />
        </Head>
      </div>
    </React.Fragment>
  )
}
