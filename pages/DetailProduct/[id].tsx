import { ApolloClient, InMemoryCache } from '@apollo/client'
import Footer from '@component/footer/Footer'
import Header from '@component/header/Header'
import { Button, Container } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getOnlyProduct } from '../api/services'
import { queriesExample } from '../queries'
import ImageViewer from 'react-simple-image-viewer'
import Detail from './Detail'
import styles from '../../styles/Home.module.css'
function ListItem(props: any) {
  const router = useRouter()
  const [state, setstate] = useState()
  const dataCart = useSelector((state: any) => state.addCartRedux)

  const id = router.query.id
  const [listimages, setListImages] = useState('')

  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [isImgMainViewerOpen, setIsImgMainViewerOpen] = useState(false)
  const images = [
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1920/1080/nature',
    'http://placeimg.com/1500/500/nature',
  ]

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])
  const openMainImageViewer = useCallback(() => {
    setIsImgMainViewerOpen(true)
  }, [])
  const closeMainImageViewer = () => {
    setIsImgMainViewerOpen(false)
  }
  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }
  useEffect(() => {
    getOnlyProduct(id).then((res) => {
      setstate(res?.data)
      setListImages(res?.data?.image)
    })
    // const client = new ApolloClient({
    //   uri: 'https://linkkienphamlap-server.kytek.io/graphql',
    //   cache: new InMemoryCache(),
    // })
    // client
    //   .query({
    //     query: queriesExample,
    //     variables: {
    //       id: id,
    //     },
    //   })
    //   .then((res) => {
    //     setstate(res.data.product)
    //   })
  }, [])
  console.log(state)

  return (
    <React.Fragment>
      <Header></Header>
      <Container maxWidth="sm">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src={listimages || ''}
            onClick={() => openMainImageViewer()}
            width="300"
            style={{ margin: '2px' }}
            alt=""
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>{state?.name} </h2>
            <div className={styles.brand}>Brand: </div>
            <h2 className={styles.price}>{state?.price}</h2>
            <Button className={styles.addToCart}>Add To Card</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="100px"
              key={index}
              style={{ margin: '2px' }}
              alt=""
            />
          ))}
        </div>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
        {isImgMainViewerOpen && (
          <ImageViewer
            src="http://placeimg.com/1200/800/nature"
            currentIndex={0}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeMainImageViewer}
          />
        )}
      </Container>

      <Footer></Footer>
    </React.Fragment>
  )
}

// export async function getStaticPaths()
// {
//   const data = await getDetailID()
//     const paths = data.map((item: Imove) => { return { params: { id: item.id } } })
//     return {paths, fallback: false}
// }
// export async function getStaticProps(context: any)
// {
//     console.log(context.params.id)
//   const movieDetail = await getDetail(context.params.id)
//   return {
//     props: {
//       detail:movieDetail
//     },
//   }
// }
export default ListItem
