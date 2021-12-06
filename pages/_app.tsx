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
import { getOnesignalId } from './notify'

function MyApp({ Component, pageProps }: AppProps) {
  const initOneSignalNotification = () => {
    if (window.Onesignal) return false
    var OneSignal = window.OneSignal || []
    OneSignal.push(function () {
      OneSignal.init({
        appId: '5ca53c07-0bbc-4842-89ad-96306a6e3e06',
      })
    })
  }

  useEffect(() => {
    initOneSignalNotification()
    getOnesignalId()
    // intervalRedux()
    // refreshUserDataGlobal()
    // refreshProductDataGlobal()
  }, [])
  // const client = new ApolloClient({
  //   uri: 'https://axieinfinity.com/graphql-server-v2/graphql',
  //   cache: new InMemoryCache(),
  // })
  return (
    // <ApolloProvider client={client}>
    <Provider store={store}>
      <Head>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" />

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
