import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Realm</Link>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/shop">Tienda</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;