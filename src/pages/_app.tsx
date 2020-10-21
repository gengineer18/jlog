import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ThemeProvider } from 'emotion-theming'
import { WindowSizeProvider } from '@/components/common/context/WindowSize'
import 'minireset.css'
import 'antd/dist/antd.css'

const theme = {
  colors: {
    primary: `red`,
    secondary: `blue`,
  },
}

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
            <Component {...pageProps} />
          </WindowSizeProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
