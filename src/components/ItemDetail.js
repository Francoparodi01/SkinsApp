import React from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css"

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);

  console.log(item)

  return (
    <div className="detail-container">
        <img
            className="detail-img"
            src= {item.img}
            alt={item.name}
        />
        <div className="detail-subcontainer">
            <h1>{item.name}</h1>
            <button>Finalizar compra</button>
            <ItemCount stock={item.stock} initial={1} />
        </div>
    </div>
);
};
  export default ItemDetail;
  