// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
export async function getMovie()
{
  const response = [{
    id: '1',
    image: 'https://images.unsplash.com/photo-1628075341657-826798e79307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'ten1',
    description: 'mo ta 1',
  },
  // {
  //   id: '2',
  //   image: 'https://images.unsplash.com/photo-1628075341657-826798e79307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  //   name: 'ten2',
  //   description: 'mo ta 2',
  //   },
  //   {
  //     id: '3',
  //     image: 'https://images.unsplash.com/photo-1628075341657-826798e79307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  //     name: 'ten3',
  //     description: 'mo ta 3',
  //   }
  ]
  return response
}
 
export async function getDetail(id)
{
  if (id === 1)
  {
    const response = {
      id: '2',
      image: 'https://images.unsplash.com/photo-1628075341657-826798e79307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'tensadasdasd',
      description: 'mo ta 22 ',
    }
    return response
  }
}
 
export async function getDetailID(id)
{
  if (id === 1)
  {
    const response = {
      id: '3',
      image: 'https://images.unsplash.com/photo-1628075341657-826798e79307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'tensadasdasd33333',
      description: 'mo ta 223333 ',
    }
    return response
  }
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
