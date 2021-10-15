import Head from 'next/head'

import { Wrapper } from 'layouts'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home - enesakilliok</title>
        <meta name="title" content="Home - enesakilliok" />
      </Head>

      <Wrapper className="wrapper">
        asd
      </Wrapper>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
}
