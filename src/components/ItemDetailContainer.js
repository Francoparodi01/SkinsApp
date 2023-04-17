import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemCount from "./ItemCount";

const ItemDetailContainer = ( {product} ) => {
  const [productDetail, setProductDetail] = useState({})
  const {productId} = useParams()
  

  useEffect(()=> {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "items", productId)
      getDoc(queryDoc)
      .then(res => setProductDetail({id: res.id, ...res.data()}))
  }, [productId])


  if (!productDetail) {
    return <Loader/>
  }

  return <ItemDetail item={productDetail} />;
}
  export default ItemDetailContainer;
  