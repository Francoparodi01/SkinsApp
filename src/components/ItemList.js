import React from 'react';
import Item from './Item';
import Loader from './Loader';

const ItemList = ({ products }) => {
    return (
        <div className='item-container'>
            {products.length ? products.map(product => {
                return <Item key={product.id} product={product}/>
            })
            : 
            <Loader/>
          }
        </div>
      )
    }
  
  
  export default ItemList