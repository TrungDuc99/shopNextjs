import React from 'react'

export default function Detail(props:any) {
    return (
        <div>
           <img src={props.data.image}></img>
      
      <div >{props.data.id}</div>
        </div>
    )
}
