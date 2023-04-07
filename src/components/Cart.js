import React from 'react'
import {BsCart} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();

    const handleNavigate = () =>{
      navigate ((`./Cart`))
    }

  return (
    <div className='div-cart' onClick={handleNavigate}>
        <BsCart className='icon-cart'/>
    </div>
  )
}

export default Cart