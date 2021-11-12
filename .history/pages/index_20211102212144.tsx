import type { NextPage } from 'next'
import { Router, useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getMovie } from './api/hello'
import Detail from './components/Detail'

function Home(props)
{
  const router = useRouter()

  const handleClick = () =>
  {
    
    router.push('/ListProduct/' + props.data.id)
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      {props.data.map(item => <Detail {...item}></Detail>)}
      

     

   
      </div>
  
  )

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