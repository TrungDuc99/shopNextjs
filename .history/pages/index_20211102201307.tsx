import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getMovie } from './api/hello'

const Home: NextPage = (props) => {
  return (
    <div className={styles.container}>
     {}
      
    </div>
  )
}

export default Home

export async function getStaticProps(context)
{
  const data = await getMovie()

  return {
    props: {
      data
    },
  }
}