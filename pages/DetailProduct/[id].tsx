import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { getDetail, getDetailID } from '../api/services'
import Detail from './Detail'

function ListItem(props: any) {
  const dataCart = useSelector((state: any) => state.addCartRedux)

  console.log(dataCart)

  return (
    <div>
      <Detail {...props.detail}></Detail>
    </div>
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
