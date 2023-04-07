import React from 'react'
import { useCartContext } from '../context/CartContext';


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div className='item-cart'>
        <img  src={product.img} alt={product.name}/>
        <div className='item-details'>
            <p className='cart-item-name'>Titulo: {product.name}</p>
            <p className='cart-item-details'>Cantidad: {product.quantity}</p>
            <p className='cart-item-details'>Precio unidad: {product.price}</p>
            <p className='cart-item-details'>Subtotal: ${product.quantity * product.price}</p>
            <button className='remove-btn' onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart