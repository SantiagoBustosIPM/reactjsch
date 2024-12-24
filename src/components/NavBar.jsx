import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';  // Asegúrate de que el componente CartWidget esté bien importado

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Tienda</Link> {/* El logo o nombre de la tienda */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/vehiculos">Vehiculos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
