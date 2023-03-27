const ItemDetail = ({ item }) => {
    return (
      <div>
        <div>{item.name}</div>
        <img src={item.img} alt={item.name} />
      </div>
    );
  };
  
  export default ItemDetail;
  