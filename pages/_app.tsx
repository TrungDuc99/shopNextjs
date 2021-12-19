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
 
    getOnesignalId().then((res)=>{
      console.log(res);
      
    })
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
  // cabbage grocery early profit maximum caught deny clip treat excuse clump inherit
}

//-----------Blockchange
//https://www.tutorialspoint.com/go/index.htm trang hoc ngôn ngữ golang
//http://remix.ethereum.org/#optimize=false&version=soljson-v0.8.10+commit.fc410830.js&runs=200&evmVersion=null -- trang code blockchange

// http://remix.ethereum.org/#optimize=false&version=soljson-v0.5.2+commit.1df8f40c.js&runs=200&evmVersion=null
// From Giảng viên 5 to Everyone 09:31 PM
// https://web3js.readthedocs.io/en/v1.5.2/
// window.web3.send_transaction

export default MyApp
