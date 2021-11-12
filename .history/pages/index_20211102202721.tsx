import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getMovie } from './api/hello'

function Home(props)
{
  const onClick = () =>
  {
    const router = useRouter()
  }

  return (
    <div className={styles.container} onClick={onClick}>

      <img src={props.data.image}></img>
      
<div >{props.data.id}</div>

    </div>
  )
}

export default Home

export async function getStaticProps()
{
  const data = await getMovie()

  return {
    props: {
      data:data,
    },
  }
}