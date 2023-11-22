import React from 'react'
import {useNavigate} from 'react-router-dom'

const Item = ({product}) => {

  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='card-container' onClick={handleNavigate}>
        <p>{product.wear}</p>
        <img src={product.img} key={product.id} className="card-img" alt={product.name} />
        <hr className='separador'/>  
        <li className='card-title'>{product.name}</li>
    </div>
  )
}

export default Item;