import React, {useState} from 'react'
import ItemList from './ItemList'
import {Items} from '../mocks/itemsMocks'

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(Items);
    }, 3000)
  );

  productList.then((data) => setItems(data));
    
    return <ItemList products={items} />
  
}

export default ItemListContainer