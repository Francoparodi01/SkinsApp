import React from 'react';
import Item from './Item';
import Loader from './Loader';
import "../App.css"

const ItemList = ({ products }) => {
    return (
      <div>
        <div className='item-container'>
          {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
          })
          : 
          <Loader/>
        }
        </div>
      </div>
      );
    };
  
  
  export default ItemList