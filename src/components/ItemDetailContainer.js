import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Items } from "../mocks/itemsMocks";
import Loader from "./Loader";
import Item from "./Item";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(Item), 2000)).then(
      (data) => setItem(data)
    );
  }, []);

  if (!item) {
    return <Loader/>
  }

  return <ItemDetail item={item} />;
}
  export default ItemDetailContainer;
  