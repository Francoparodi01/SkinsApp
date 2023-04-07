import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Navb from "./components/Navb";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartProvider from './context/CartContext';

export const CartContext = React.createContext('');



function App() {
  return(
    <BrowserRouter>
      <CartProvider>
        <Navb/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
