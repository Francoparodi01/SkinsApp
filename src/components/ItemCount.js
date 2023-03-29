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
    <div>
        <button onClick={decrease}>-</button>
        <h2>{count}</h2>
        <button onClick={increase}>+</button>
        <button onClick={reset}>borrar</button>
    </div>
    );
};

export default ItemCount;
