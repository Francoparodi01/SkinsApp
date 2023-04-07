import React from 'react'
import {BsCart} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {

    const {totalProducts} = useCartContext();

    const navigate = useNavigate();

    const handleNavigate = () =>{
      navigate ((`./Cart`))
    }

  return (
    <div className='div-cart' onClick={handleNavigate}>
        <BsCart className='icon-cart'/> 
        <span className='cart-counter'>{totalProducts () }</span>
    </div>
  )
}

export default CartWidget