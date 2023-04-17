import React from 'react';
import Item from './Item';
import Loader from './Loader';
import "../App.css"
import ArrowDropdown from './ArrowDropdown';

const ItemList = ({ products }) => {
    return (
      <div>
          <ArrowDropdown/>
        <div className='item-container '>

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