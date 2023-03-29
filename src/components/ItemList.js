import React from 'react';
import { Items } from '../mocks/itemsMocks';
import Item from './Item';
import Loader from './Loader';

const ItemList = ({ products }) => {
    return (
        <div className='item-container'>
          {products.map((product) => (
              <Item product={product} />
          ))};
        </div>
      );
    };
  
  
  export default ItemList