import React, {useState} from 'react'
import ItemList from './ItemList'
import {Items} from '../mocks/itemsMocks'
import Loader from './Loader';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  const listproduct = new Promise((resolve) =>
    setTimeout(() => {
      resolve(Items);
    }, 3000)
  );

  listproduct
    .then((data) => setProducts(data))
    .then((data) => setHasProduct(!data));

  console.log(products);

  return (
      !hasProduct ? (
        <Loader/>
      ) : (
        <ItemList products={products}/>
      )
  );
};
export default ItemListContainer