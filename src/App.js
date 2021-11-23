import "./App.css"
import React from "react"
import Contador from "./components/Contador/Contador.js";
import NavBar from "./components/NavBar/NavBar";
//import lista from "./components/Lista/Lista";
import Armas from "./components/Armas/Armas"
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <>
    <Contador />
    
    <NavBar />

    <Armas />
    </>
  );
}

export default App;