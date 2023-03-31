import React, { useState} from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;
    const { addItem } = useContext(CartContext);
    const [showDetail, setShowDetail] = useState(false);
  
    const toggleDetail = () => {
      setShowDetail(!showDetail);
    };


  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  return (
  <div className="cardContainer">
    <Card style={{ width: '18rem', margin:"15px" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title className="item-name">{item.name}</Card.Title>
      </Card.Body>
      <hr className='separador2'/> 
          <p className="summary">Summary</p>
      <ListGroup className="list-group-flush" id="li-item">
        <ListGroup.Item>Category: {item.category}</ListGroup.Item>
        <ListGroup.Item>Wear: {item.wear}</ListGroup.Item>
        <ListGroup.Item>stock: {item.stock}</ListGroup.Item>
      </ListGroup>
    </Card>
    <ItemCount stock={item.stock} initial={1} />
  </div>  
  );
}
  export default ItemDetail;