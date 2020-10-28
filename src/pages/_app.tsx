import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ThemeProvider } from 'emotion-theming'
import { WindowSizeProvider } from '@/components/common/context/WindowSize'
import 'minireset.css'
import 'antd/dist/antd.css'
import { auth } from '@/utils/firebase'

const theme = {
  colors: {
    primary: `red`,
    secondary: `blue`,
  },
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [idToken, setIdToken] = useState<string>(``)

  auth?.onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then((token) => {
        setIdToken(token)
      })
    }
  })

  const httpLink = createHttpLink({
    // uri: `https://measured-fowl-83.hasura.app/v1/graphql`,
    uri: `http://localhost:8080/v1/graphql`,
  })

  const authLink = setContext((_, { headers }) => {
    const token = idToken
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ``,
      },
    }
  })

  const createApolloClient = () =>
    new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    })
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
