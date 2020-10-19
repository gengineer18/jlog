import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
// import { ApolloProvider } from '@apollo/react-hooks'
import { Layout } from 'antd'
import { css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Header } from '@/components/common/layout/Header'
import { Footer } from '@/components/common/layout/Footer'
import { WindowSizeProvider } from '@/components/common/context/WindowSize'
import 'minireset.css'
import 'antd/dist/antd.css'

const { Content } = Layout

const theme = {
  colors: {
    primary: `red`,
    secondary: `blue`,
  },
}

const wrapper = css({
  minHeight: `calc(100vh - 70px)`,
})

const layout = css({
  minHeight: `calc(100vh - 70px)`,
  maxWidth: `960px`,
  margin: `0 auto`,
  padding: `20px 12px`,
})

// const footer = css({
//   height: `50px`,
// })

const createApolloClient = () =>
  new ApolloClient({
    link: new HttpLink({
      uri: `http://localhost:8080/v1/graphql`,
    }),
    cache: new InMemoryCache(),
  })

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = createApolloClient()

  return (
    <>
      <Head>
        <title>JLog</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <WindowSizeProvider>
            <div css={wrapper}>
              <Header />
              <Content css={layout}>
                <Component {...pageProps} />
              </Content>
            </div>
          </WindowSizeProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
