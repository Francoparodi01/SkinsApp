import React from 'react'
import { useCartContext } from '../context/CartContext';


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div>
        <img  src={product.img} alt={product.name}/>
        <div className='divCarrito'>
            <p className='tituloCarrito'>Titulo: {product.name}</p>
            <p className='cantidadCarrito'>Cantidad: {product.quantity}</p>
            <p className='precioUnidadCarrito'>Precio unidad: {product.price}</p>
            <p className='subtotalCarrito'>Subtotal: ${product.quantity * product.price}</p>
            <button className='eliminarCarrito' onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart