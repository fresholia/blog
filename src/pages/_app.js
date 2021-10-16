import React from "react"
import Head from "next/head"

import { PageScheme } from "layouts"

import "styles/global.scss"

function App(props) {
    const { Component, pageProps } = props
    return (
        <React.Fragment>
            <Head>
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="author" content="enes akıllıok <enesakilliok@icloud.com>" />
                <meta name="keywords" content="Enes Akıllıok, enes, blog, portfolio, iletişim, cv, geliştirici, front end developer" />
                <meta name="application-name" content="blog - enes akıllıok" />
                
                <title>Home - enesakilliok</title>
                <meta name="title" content="404 - enesakilliok" />

                { pageProps.canonical ? <link rel="canonical" href={pageProps.canonical} /> : "" }
            </Head>
            <div className="pageContent">
                <PageScheme menus={{
                        '/': 'Giriş',
                        '/certificates': 'Sertifikalar',
                        '/blog': 'Blog',
                        '/contact': 'İletişim',
                    }}>
                    <Component {...pageProps} />
                </PageScheme>
                <Component {...pageProps} />
            </div>
        </React.Fragment>
    )
}

export default App