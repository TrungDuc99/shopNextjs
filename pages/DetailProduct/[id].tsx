import { ApolloClient, InMemoryCache } from '@apollo/client'
import Footer from '@component/footer/Footer'
import Header from '@component/header/Header'
import { Container } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { queriesExample } from '../queries'
import './styles.scss'
import Detail from './Detail'
function ListItem(props: any) {
  const router = useRouter()
  const [state, setstate] = useState()
  const dataCart = useSelector((state: any) => state.addCartRedux)

  const id = router.query.id
  ///--------------git stash
  useEffect(() => {
    const client = new ApolloClient({
      uri: 'http://localhost:5000/graphql',
      cache: new InMemoryCache(),
    })

    client
      .mutate({
        mutation: queriesExample,
        variables: {
          id: id,
        },
      })
      .then((res) => {
        setstate(res.data.product)
      })
  }, [])
  console.log(state)

  return (
    <React.Fragment>
      <Header></Header>
      <Container maxWidth="lg">
        <div className="containDetail">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              style={{ width: '300px', height: '320px' }}
              src={state?.image}
            ></img>
          </div>
        </div>
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
