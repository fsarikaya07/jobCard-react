import React from 'react'
import Button from '../button/Button'
import "./card.css"

const Card = ({name,job,comment,img}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <h3>{job}</h3>
      <p>{comment}</p>
      <img src={img}/>
      <Button/>
    </div>
  )
}

export default Card