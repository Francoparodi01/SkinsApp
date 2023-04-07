import React from 'react'
import { useCartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {

    const {cart, totalPrice} = useCartContext();
    const navigate = useNavigate();
    const home = () => {
        navigate("/"); 
    };

    if(cart.length === 0){
        return (
            <div className='div-carrito-vacio'>
                <p>No hay elementos en el carrito</p>
                <button className='botonCarrito' onClick={home}>Comprar productos</button>
            </div>
        );
    }

  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}> </ItemCart>)
        }
    </>
  )
}

export default Cart