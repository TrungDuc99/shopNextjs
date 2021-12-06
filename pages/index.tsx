import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import styles from '../styles/Home.module.css'
import {
  setDataCartRedux,
  setDataProductRedux,
  setDataRedux,
} from '../controller/redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { getProduct } from './api/services'
import {
  queriesAxies,
  queriesExample,
  queriesExampleMutation,
  queriesExampleMutationCreate,
  queriesExampleMutationUpdate,
} from './queries'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { Box } from '@material-ui/core'
import { cartDataGlobal } from '../common/redux'

function ListCard(props) {
  const [data, setData] = useState()
  const [listCart, setListCart] = useState([])
  const router = useRouter()

  // const dispatch = useDispatch()
  // const connRedux = (state: any) => state.dataRedux
  // const selectorRedux = createSelector(connRedux, (data) => {
  //   return data
  // })
  // const selectorData = useSelector((state) => selectorRedux(state))

  // const dispatch = useDispatch()
  // dispatch(setDataProductRedux(props))
  const dataProductRedux = useSelector((state: any) => state.dataProductRedux)
  const dataUserRedux = useSelector((state: any) => state.dataUserRedux)
  const dataRandomRedux = useSelector((state: any) => state.dataRandomRedux)
  // console.log(dataProductRedux)

  // const connRedux = (state: any) => state.addCartRedux
  // const selectorRedux = createSelector(connRedux, (data) => {
  //   return listCart
  // })
  // const selectorData = useSelector((state) => selectorRedux(state))

  // console.log(selectorData)
  const dataCart = useSelector((state: any) => state.addCartRedux)

  // console.log(dataCart)
  const handleClick = (e, item) => {
    router.push('/DetailProduct/' + item.id)
  }

  const handleClickAddCard = (e, item) => {
    cartDataGlobal(item)
    const newTodos = [...listCart]
    newTodos.push(item)
    setListCart(newTodos)
  }

  // const { loading, error, data } = useQuery(queriesAxies, {
  //   variables: {
  //     from: 0,
  //     size: 20,
  //     sort: 'IdDesc',
  //     auctionType: 'All',
  //     owner: '0x4E281AdD1E87F5aa0fD9c39D8Bcfd7C1a6da61fD',
  //   },
  // })

  //-------------BUOI 3-------------------

  // <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
  // <script>
  //   window.OneSignal = window.OneSignal || [];
  //   OneSignal.push(function() {
  //     OneSignal.init({
  //       appId: "5ca53c07-0bbc-4842-89ad-96306a6e3e06",
  //     });
  //   });
  // </script>

  // <script
  {
    /* <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" /> */
  }

  // const initOnesginal = () => {
  //     if (window.Onesignal) return false;
  //     console.log('Go init')
  //     var OneSignal = window.OneSignal || [];
  //     OneSignal.push(async function () {
  //       console.log('Init done')
  //       OneSignal.init({
  //         appId: "5a543c5e-98e2-4877-93f4-fd294533b3b0",
  //         // allowLocalhostAsSecureOrigin: true,
  //         // restrictedOriginEnabled: false,
  //         // autoRegister: true,
  //         // notifyButton: {
  //         //   enable: false
  //         // }
  //       })
  //       const userId = await window.OneSignal.getUserId().then(res=>{
  //         console.log('Go go', res)
  //       })
  //       console.log('userId', userId)
  //     });
  //   }
  //-----------

  useEffect(() => {
    const client = new ApolloClient({
      uri: 'https://axieinfinity.com/graphql-server-v2/graphql',
      cache: new InMemoryCache(),
    })
    client
      .query({
        query: queriesAxies,
        variables: {
          from: 0,
          size: 20,
          sort: 'IdDesc',
          auctionType: 'All',
          owner: '0x4E281AdD1E87F5aa0fD9c39D8Bcfd7C1a6da61fD',
        },
      })
      .then((res) => {
        setData(res.data.axies.results)
        // console.log(res.data.axies.results)
      })

    // const initOnesginal = () => {
    //   if (window.Onesignal) return false
    //   console.log('Go init')
    //   var OneSignal = window.OneSignal || []
    //   OneSignal.push(async function () {
    //     console.log('Init done')
    //     OneSignal.init({
    //       appId: '5ca53c07-0bbc-4842-89ad-96306a6e3e06',
    //       allowLocalhostAsSecureOrigin: true,
    //       restrictedOriginEnabled: false,
    //       autoRegister: true,
    //       notifyButton: {
    //         enable: false,
    //       },
    //     })
    //     const userId = await window.OneSignal.getUserId().then((res) => {
    //       console.log('Go go', res)
    //     })
    //     console.log('userId', userId)
    //   })
    // }

    // getProduct()
    //   .then((res) => {
    //     setData(res.data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }, [])
  ///--------------git stash
  // useEffect(() => {
  //   const client = new ApolloClient({
  //     uri: 'http://localhost:5000/graphql',
  //     cache: new InMemoryCache(),
  //   })

  //   client
  //     .mutate({
  //       mutation: queriesExampleMutationUpdate,
  //       variables: {
  //         id: '618d1abe3240c54f1035988c',
  //         name: 'testt updateeeeee graphql',
  //         price: '12314141asdaasf5',
  //         description: 'demomoo updateeeeee graphql',
  //       },
  //     })
  //     .then((res) => {
  //       console.log('Resilt', res)
  //     })
  // }, [])

  // useEffect(() => {
  // const client = new ApolloClient({
  //   uri: 'https://axieinfinity.com/graphql-server-v2/graphql',
  //   cache: new InMemoryCache(),
  // })
  // client
  //   .query({
  //     query: queriesAxies,
  //     variables: {
  //       from: 0,
  //       size: 20,
  //       sort: 'IdDesc',
  //       auctionType: 'All',
  //       owner: '0x4E281AdD1E87F5aa0fD9c39D8Bcfd7C1a6da61fD',
  //     },
  //   })
  //   .then((res) => {
  //     setData(res.data.axies.results)
  //     // console.log(res.data.axies.results)
  //   })
  // })

  const handleRemoveCart = (e, id) => {
    const newListCart = listCart.filter((item) => item._id != id)
    setListCart(newListCart)
  }
  return (
    <React.Fragment>
      <Header listItemCart={listCart} handleRemoveCart={handleRemoveCart}></Header>
      <div style={{ padding: '10px' }}>
        <div className={styles.container}></div>
        <div className={styles.cardList}>
          {data &&
            data.map((item, index) => (
              <div className={styles.cardItem}>
                <img
                  onClick={(e) => {
                    handleClick(e, item)
                  }}
                  style={{ cursor: 'pointer' }}
                  src={item.image}
                  alt="hinh-card"
                  className={styles.cardImage}
                ></img>
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardTitle}>{item.description}</h3>
                    <div className={styles.cardUser}>
                      <img
                        src={item.image}
                        alt="hinh-avatar"
                        className={styles.cardUserAvatar}
                      />
                      <div className={styles.cardUserInfo}>
                        <div className={styles.cardUserTop}>
                          <h4 className={styles.cardUserName}>{item.name} </h4>
                          <CheckCircleRoundedIcon
                            style={{ color: 'green' }}
                          ></CheckCircleRoundedIcon>
                        </div>
                        <div className={styles.cardUserGame}>{item.class}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardLive}>
                      {/* <Box style={{ marginRight: '5px' }}>{selectorData}</Box> */}
                      <span>{item.price || 0}đ</span>
                    </div>

                    <div
                      onClick={(e) => {
                        handleClickAddCard(e, item)
                      }}
                      style={{ cursor: 'pointer' }}
                      className={styles.cardWatching}
                    >
                      Thêm giỏ hàng
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* <div className={styles.cardItem}>
            <img
              src="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt="hinh-card"
              className={styles.cardImage}
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  2020 World Champs Gaming Warzone 2020 World Champs Gaming Warzone
                  2020 World Champs Gaming Warzone
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src="https://images.unsplash.com/photo-1635585069148-95d53d89067b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80"
                    alt="hinh-avatar"
                    className={styles.cardUserAvatar}
                  />
                  <div className={styles.cardUserInfo}>
                    <div className={styles.cardUserTop}>
                      <h4 className={styles.cardUserName}>Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className={styles.cardUserGame}>Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardLive}>
                  <span>600.000 đ</span>
                </div>
                <div className={styles.cardWatching}>4.2k Lươt mua</div>
              </div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <img
              src="https://images.unsplash.com/photo-1635274142658-9260d3bf88c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80"
              className={styles.cardImage}
              alt="hinh-avatar"
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  2020 World Champs Gaming Warzone
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src="https://images.unsplash.com/photo-1635451321772-b81dcf1d0aac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                    alt="hinh-avatar"
                    className={styles.cardUserAvatar}
                  />
                  <div className={styles.cardUserInfo}>
                    <div className={styles.cardUserTop}>
                      <h4 className={styles.cardUserName}>Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className={styles.cardUserGame}>Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardLive}>
                  <span>600.000 đ</span>
                </div>
                <div className={styles.cardWatching}>4.2k Lươt mua</div>
              </div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className={styles.cardImage}
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  2020 World Champs Gaming Warzone
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src="https://images.unsplash.com/photo-1628075341657-826798e79307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="hinh-avatar"
                    className={styles.cardUserAvatar}
                  />
                  <div className={styles.cardUserInfo}>
                    <div className={styles.cardUserTop}>
                      <h4 className={styles.cardUserName}>Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className={styles.cardUserGame}>Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardLive}>
                  <span>600.000 đ</span>
                </div>
                <div className={styles.cardWatching}>4.2k Lươt mua</div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className={styles.footerDay2}>
          <h1 className={styles.textContenDay2}>{props.dataDemo.description.it}</h1>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              className={styles.listImageDay2}
              src={props.dataDemo.image.large}
              alt="hinh-avatar"
            />
            <img
              className={styles.listImageDay2}
              src={props.dataDemo.image.large}
              alt="hinh-avatar"
            />
            <img
              className={styles.listImageDay2}
              src={props.dataDemo.image.large}
              alt="hinh-avatar"
            />
            <img
              className={styles.listImageDay2}
              src={props.dataDemo.image.large}
              alt="hinh-avatar"
            />
          </div>
        </div> */}
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
}
export default ListCard

// export async function getStaticProps() {
//   const data = await fetch('http://45.77.244.252:5000/api/product').catch(
//     (error) => {
//       console.log(error)
//     }
//   )
//   const returnData = await data.json()
//   return {
//     props: {
//       dataProduct: returnData,
//     },
//   }
// }

// export async function getStaticProps() {
//   const data = await getMovie()

//   return {
//     props: {
//       data: data[1],
//     },
//   }
// }

// import type { NextPage } from 'next'
// import { Router, useRouter } from 'next/dist/client/router'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { getMovie } from './api/hello'
// import Detail from './components/Detail'

// function Home(props)
// {
//   const router = useRouter()

//   const handleClick = () =>
//   {

//     router.push('/ListProduct/' + props.data.id)
//   }
//   return (
//     <div className={styles.container} onClick={handleClick}>
//       {props.data.map(item => <Detail {...item}></Detail>)}

//       </div>

//   )

// export default Home

// export async function getStaticProps()
// {
//   const data = await getMovie()

//   return {
//     props: {
//       data:data,
//     },
//   }
// }

// server
// {
//  listen 80;
//     server_name epayment.kytek.io;
//     location /
//     {
//         proxy_pass http://127.0.0.1:3000;
//     }
// }

// Implement 2 trang detail và 3 trang list all
//- Trong đó bao gồm 1 số function liên quan useState và truyền data hay thay đổi data tạm
//- Có add localstorage
//------------------- pm2 -------ls để xem thư mục
//câu lệnh : sudo defaul, nano default , nano start.sh, pm2 log 0 ,pm2 restart 0 , sudo nano default
// 1 - Login : ssh songtoan@45.77.244.252
// 2 - sudo nano default : cấu hình npm run dev
// 3 - pm2 log 0 : chạy code trong pm2
// 4 - nano start.sh : định nghĩa file để chạy code
// 5 - pm2 restart 0 : lệnh chạy lại code trong pm2
// 6 -  /etc/nginx/sites-available (1): cấu hình localhost
// 7 - nano default (2): //server
// {
//   listen 80;
//      server_name linkkienphamlap.kytek.io;
//      location /
//      {
//          proxy_pass http://127.0.0.1:8081;
//      }
//  }

//  server
//  {
//   listen 80;
//      server_name linkkienphamlap-server.kytek.io;
//      location /
//      {
//          proxy_pass http://127.0.0.1:5000;
//      }
//  }

// 8 - pm2 start dev.sh --name shop : restart file code hiện hành với name là shop lên "pm2 l"
// 9 - pm2 l : xem các host đang chạy
// 10 - nano dev.sh :định nghĩa run trong file hiện hành
//
//
//
//
//
// linkkienphamlap-server.kytek.io , https://linkkienphamlap.kytek.io,https://linkkienphamlap-server.kytek.io/api/product

//server
// {
//   listen 80;
//      server_name linkkienphamlap.kytek.io;
//      location /
//      {
//          proxy_pass http://127.0.0.1:8081;
//      }
//  }

//  server
//  {
//   listen 80;
//      server_name linkkienphamlap-server.kytek.io;
//      location /
//      {
//          proxy_pass http://127.0.0.1:5000;
//      }
//  }
