import React from 'react'
import { getDetail } from '../api/hello'

export default function ListItem(props) {
    return (
        <div>
            {props.detail.description}
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