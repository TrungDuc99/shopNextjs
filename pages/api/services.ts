// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export async function getUser() {
  const data = await fetch('https://linkkienphamlap-server.kytek.io/api/user').catch(
    (error) => {
      console.log(error)
    }
  )
  const returnData = await data.json()
  return returnData
}

export async function getProduct() {
  const data = await fetch(
    'https://linkkienphamlap-server.kytek.io/api/product'
  ).catch((error) => {
    console.log(error)
  })
  const returnData = await data.json()
  return returnData
}

export async function getCategory() {
  const data = await fetch(
    'https://linkkienphamlap-server.kytek.io/api/category'
  ).catch((error) => {
    console.log(error)
  })
  const returnData = await data.json()
  return returnData
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
