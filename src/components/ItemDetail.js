import React, { useState} from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css"

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);
    const [showDetail, setShowDetail] = useState(false);
  
    const toggleDetail = () => {
      setShowDetail(!showDetail);
    };

  console.log(item)

  return (
    <div className="product">
        <div className="detail-container">
            <img
                className="detail-img"
                src= {item.img}
                alt={item.name}
            />
            <div className="detail-subcontainer">
      <h2 className="nombreItem">{item.name}</h2>
      <button onClick={toggleDetail}>
        {showDetail ? "Ocultar detalle" : "Mostrar detalle"}
      </button>
      {showDetail && (
        <div className="item-detail">
          <p className="nombreItem">{item.wear}</p>
        </div>
      )}
        </div>
            <div className="contador">
                <ItemCount stock={item.stock} initial={1} />
            </div>
        </div>
    </div>
);
};
  export default ItemDetail;
  