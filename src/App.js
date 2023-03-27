import { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Navb from "./components/Navb";
import ItemListContainer from "./components/ItemListContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export const ThemeContext = createContext(null)


function App() {
  return(
    <div> 
      <Navb/>
      <ItemListContainer/>
    </div>
  );

}

export default App;
