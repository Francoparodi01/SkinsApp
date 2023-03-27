import Loader from "./Loader";
import { useEffect, useState } from "react";
import { Items } from "../mocks/itemsMocks";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(Items), 2000)).then(
      (data) => setItem(data)
    );
  }, []);

  if (!item) {
    return 
      <loader/>
  }

  return <ItemDetail item={item} />;
};
  
  export default ItemDetailContainer;
  