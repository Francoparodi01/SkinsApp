import React from 'react'
import {useNavigate} from 'react-router-dom'

const Item = ({product}) => {

  return (
    <div className='card-container'>
        <img src={product.img} className="card-img" alt={product.name} />
        <hr className='separador'/>  
        <li className='card-title'>{product.name}</li>
    </div>
  )
}

export default Item;