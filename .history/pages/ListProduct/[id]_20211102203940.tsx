import React from 'react'
import { getDetail } from '../api/hello'
import Detail from '../components/detail'

export default function ListItem(props: any) {
    return (
        <div>
           <Detail></Detail>
        </div>
    )
}

export async function getStaticPaths(context)
{
  const data = await getMovie()
    const paths = data.map((item: Imove) => { return { params: { id: item.id } } })
    return {paths, fallback: false}
}
export async function getStaticProps(context)
{
  const movieDetail = await getDetail(2)

  return {
    props: {
      detail:movieDetail
    },
  }
}