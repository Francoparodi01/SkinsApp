import React, {useState} from 'react'

    
const useCounter = () =>{

    const [count, setCount] = useState(0)
    const decrease = () => setCount (count - 1)
    const reset = () => setCount(0)
    const increase = () => setCount (count + 1)
 
    return{
        count,
        increase,
        reset,
        decrease
    }
    
}


export const ItemCount = () => {

    const {count,increase,reset,decrease} = useCounter()

    return (
    <div className='item-count'>
        <button className='decrement' onClick={decrease}>-</button>
        <h2 className='count'>{count}</h2>
        <button className='increment' onClick={increase}>+</button>
        <button className='' onClick={reset}>borrar</button>
    </div>
    );
};

export default ItemCount;
