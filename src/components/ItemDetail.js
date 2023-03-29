import React from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css"

const ItemDetail = ({ product }) => {

  const { addItem } = useContext(CartContext);

  console.log(product)

  return (
    <div className="detail-container">
        <img
            className="detail-img"
            src= {product.img}
            alt={product.name}
        />
        <div className="detail-subcontainer">
            <h1>{product.name}</h1>
            <button>Finalizar compra</button>
            <ItemCount stock={product.stock} initial={1} />
        </div>
    </div>
);
};
  export default ItemDetail;
  