import React, { useState, useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext} from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../App.css"

const ItemDetail = ({ item }) => {
  const { addProduct } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) =>{
    setGoToCart(true);
    addProduct(item, quantity)
  }
  

  return (
<div>
  <div className="">
  <img src={item.img}></img>
  </div>
  <div>
    <h2 className="text-item">{item.name}</h2>
    <ItemCount count={count} initial={1} stock={item.stock} onAdd={onAdd}/>
  </div>
</div>

  );
}
  export default ItemDetail;