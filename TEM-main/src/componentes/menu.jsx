import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="header" style= {{backgroundColor:"#3040fa"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{margin: "20px"}}>
        <div className="container-fluid">
          <Link to='/Pagina_Principal' className="navbar-brand">
            <i>
              Transpórtate En Medellin
            </i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"i id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
                <Link className="nav-link active" to="/Pagina_Principal">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="/Metro">
                  Metro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Solobus">
                  Solobus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Taxi">
                  Taxi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Circulares">
                  Circulares
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Qué deseas ver?"
            aria-label="Search"
          />
          <button type="button" className="btn btn-dark">Search</button>
        </form>
      </div>
      <div className="p-3">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#000000" }}>
            <strong style={{ color: '#ffffff' }}>
              ¡Bienvenidos!
            </strong>
          </div> 
          <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
            <h4 className="encabezado fst-italic">
              Transpórtate con la mejor página web de servicios y ubicación online en todo Medellin
            </h4>
            <p className="card-text">
              Esta página cuenta con tecnología de mapas para encontrar los precios, tarifas, rutas y ubicaciones de distintos métodos de transporte en todo Medellin.
            </p>
          </div>  
        </div>  
      </div>
    </div>
  );
}

export default Menu;
