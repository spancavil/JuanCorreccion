import "./App.css"
import React from "react"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";

// const mensaje = "Bienvenido al Mercado de Carrera Blanca";
function App() {
  return(
    <div name="background" class="p-3 mb-2 bg-dark text-white">
      <NavBar />
      <ItemListContainer />
    </div>
  
  );
}

export default App;