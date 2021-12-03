import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import styles from '../styles/Home.module.css'
import { setDataRedux } from '../controller/redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

function ListCard(props) {
  // const router = useRouter()
  // const dispatch = useDispatch()
  // const dataRedux = useSelector((state: any) => state.dataRedux)
  // dispatch(setDataRedux(props.dataProduct))
  // const connRedux = (state: any) => state.dataRedux
  // const selectorRedux = createSelector(
  //   connRedux, (data) => { return { name: data[0].name } }
  // )
  // const selectorData = useSelector(state => selectorRedux(state))

  useEffect(() => {})
  const handleClick = () => {
    // router.push('/DetailProduct/' + props.data.id)
  }
  // server
  // {
  //  listen 80;
  //     server_name epayment.kytek.io;
  //     location /
  //     {
  //         proxy_pass http://127.0.0.1:3000;
  //     }
  // }

  const dispatch = useDispatch()

  const connRedux = (state: any) => state.dataRedux
  const selectorRedux = createSelector(connRedux, (data) => {
    return data
  })

  const selectorData = useSelector((state) => selectorRedux(state))

  // console.log(selectorData)

  return (
    <React.Fragment>
      <Header></Header>
      <div style={{ padding: '10px' }}>
        <div className={styles.container}></div>
        <div className={styles.cardList}>
          <div className={styles.cardItem}>
            <img
              onClick={handleClick}
              src={props.dataProduct.data[0].image}
              alt="hinh-card"
              className={styles.cardImage}
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  {/* 2020 World Champs Gaming Warzone */}
                  {/* {props.dataDemo.description} */}
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src={props.dataProduct.data[1].image}
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
          </div>
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
// Implement 2 trang detail và 3 trang list all
//- Trong đó bao gồm 1 số function liên quan useState và truyền data hay thay đổi data tạm
//- Có add localstorage

//-----
//export const verifyToken = (token) => {
//   return jwt.verify(token, process.env.SECRET_TOKEN, (err) => !err)
// }

// export const decodeToken = (token) => {
//   const decodeString = jwt.decode(token)
//   return decodeString ? decodeString.id : null
// }
// export const generateToken = (userSign) => {
//   return jwt.sign({ id: userSign }, process.env.SECRET_TOKEN, { expiresIn: '3650d' })
// }

//---------
// import { createReducer } from "@reduxjs/toolkit";
// import { KEY_STORAGE } from "../../../common/constant";

// export const dataRedux = createReducer([], {
//   [KEY_STORAGE.SET_DATA](state, action) {
//     return action.payload;
//   }
// })

//--------
// import { createAction } from "@reduxjs/toolkit";

// export const setDataRedux = createAction('SET_DATA')

//--------
// var socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');
// socket.addEventListener('message', function (event)
// {
//   // parse & show the data
// });
