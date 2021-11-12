import type { NextPage } from 'next'
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
    <div className={styles.container}>

s
<link to="/about">{props.data.id}</link>

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