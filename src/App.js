
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Navb from "./components/Navb";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Fav from "./components/Fav";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartProvider from "./context/CartContext";




function App() {
  return(
    <BrowserRouter>
      <Navb/>
      <CartProvider>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
