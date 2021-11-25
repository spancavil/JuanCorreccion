import "./App.css"
import React from "react"
import CountContainer from "./Components/CountContainer/CountContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemList from "./Components/ItemList/ItemList";
import Carrito from "./Components/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import jsonpack from './Components/data.json';

const mensaje = "Bienvenido al Mercado de Carrera Blanca";
function App() {
  return (

    <div name="background" class="p-3 mb-2 bg-dark text-white">
    <div className="App"></div>
    <ItemListContainer name={mensaje} />

      <header className="App-header">
      </header>
          
    
    <getContainer />
    <Carrito />
    <ItemList />
    <ItemListContainer />
    <ItemCount />
    <Item />
    <NavBar />
    <CountContainer />
    </div>
  
  );
}

export default App;