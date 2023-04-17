import React, { useState, useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext} from "../context/CartContext";
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
<div >
  <div className="card-ind">
    <div className="card">
      <div className="card-front">
        <img className="card-img-ind" alt={item.name} src={item.img}></img>
      </div>
    <div className="card-back">
      <table className="tabla-valores">
        <tbody>
          <tr>
          <td>Category:</td>
          <td>{item.category}</td>
          </tr>
          <tr>
          <td>Wear:</td>
          <td>{item.wear}</td>
          </tr>
          <tr>
          <td>Stock:</td>
          <td>{item.stock}</td>
          </tr>
          <tr>
          <td>finish:</td>
          <td>{item.finish}</td>
          </tr>
          <tr>
          <td>Gun:</td>
          <td>{item.gun}</td>
          </tr>
          <tr>
          <td>Type:</td>
          <td>{item.type}</td>
          </tr>
          <tr>
          <td>Price:</td>
          <td>${item.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
  <div>
    <h2 className="text-item">{item.name}</h2>

    <ItemCount count={count} initial={1} stock={item.stock} onAdd={onAdd}/>
  </div>
</div>

  );
}
  export default ItemDetail;