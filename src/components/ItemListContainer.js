import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ArrowDropdown from './ArrowDropdown';


const ItemListContainer = ( ) => {
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items")
    if (categoryId) {
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
        getDocs(queryFilter)
          .then(res => setProductos(res.docs.map(productos =>({id: productos.id, ...productos.data()}))) )    
          .then(res => setProductos(res.docs.map(productos =>({type: productos.type, ...productos.data()}))) )   
      }else{
        getDocs(queryCollection)
          .then(res => setProductos(res.docs.map(productos =>({id: productos.id, ...productos.data()}))) )   
      }
}, [categoryId]);
return <ItemList products={productos} />;
};
export default ItemListContainer