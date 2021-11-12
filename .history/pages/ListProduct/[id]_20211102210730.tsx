import React from 'react'
import { getDetail, getDetailID } from '../api/hello'
import Detail from '../components/detail'

 function ListItem(props: any)
{
    console.log(props);
   
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