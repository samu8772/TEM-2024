import React from 'react'
import '../estilos/index.css'
import {Link } from "react-router-dom"

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bienvenido</h2>
        <p>Inicia sesión para continuar</p>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password"/>
          </div>
          <Link to="/Pagina_Principal"><button type="submit" className="login-button">Iniciar Sesión</button></Link>
          
        </form>
        <div className="footer-text">
          <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
