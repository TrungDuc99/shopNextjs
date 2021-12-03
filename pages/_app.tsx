import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { store } from '../controller/redux/store/configureStore'
import { Provider } from 'react-redux'
import {
  cartDataGlobal,
  intervalRedux,
  refreshProductDataGlobal,
  refreshUserDataGlobal,
} from '../common/redux'
import { useEffect } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { dataUserRedux } from '../controller/redux/reducers/storageReducers'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    intervalRedux()
    refreshUserDataGlobal()
    refreshProductDataGlobal()
  }, [])
  // const client = new ApolloClient({
  //   uri: 'https://axieinfinity.com/graphql-server-v2/graphql',
  //   cache: new InMemoryCache(),
  // })
  return (
    // <ApolloProvider client={client}>
    <Provider store={store}>
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        {/* <link rel="icon" href={images.favicon} /> */}
      </Head>
      <Component {...pageProps} />
    </Provider>
    // </ApolloProvider>
  )
}

export default MyApp
