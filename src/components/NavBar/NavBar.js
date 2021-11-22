
import React from 'react';
import './NavBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-success navbar-dark">
     
  <ul class="navbar-nav">
  
    <li class="nav-item active">
      <a class="nav-link" href="#">INICIO</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="#">ARMAS</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="#">ARMADURAS</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="#">LIBROS</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="#">POCIONES</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="#">INGREDIENTES</a>
    </li>
  </ul>
  <p>
  <button type="button" class="btn btn-info">
    <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>Comprar
    </button>
  </p> 
  
  
</nav>
        </>
    )
}

export default NavBar;
