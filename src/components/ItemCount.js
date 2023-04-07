import React, {useState} from 'react'
import { CartContext, useCartContext } from "../context/CartContext";


export const ItemCount = ({onAdd, initial, stock }) => {

    const [count, setCount] = useState(initial);

    const decrease  = () =>{
        setCount(count - 1); 
    }

    const increase  = () =>{
        setCount(count + 1); 
    }



    return (
    <div className='item-count'>
        <button className='decrement' onClick={decrease} disabled={count <=1} >-</button>
        <h2 className='count'>{count}</h2>
        <button className='increment' onClick={increase} disabled={count >= stock}>+</button>
        <button className='reset' disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
