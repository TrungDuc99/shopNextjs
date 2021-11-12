import type { NextPage } from 'next'
import { Router, useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getMovie } from './api/hello'
import { useRouter } from 'next/router'
function Home(props)
{
  const router = useRouter()

  const handleClick = () => {
    
    router.push('/1')
  }
  return (
    <div className={styles.container} onClick={handleClick}>
 
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