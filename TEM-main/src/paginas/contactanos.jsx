import React from 'react'
import Menupeq from '../componentes/menupeq'
import contacto from '../imagenes/contacto.png'

function Contactanos() {
  return (
    <div className='Contactanos'>
      <Menupeq />
      <div className='contact'>
        <h1>Contactanos</h1>
        <img src={contacto} alt="imagen" width={450}/>
        <hr />
        <div className='divcontacto'>
          <h2>Correos de trabajo:</h2>
          <p><b>Samuel Galeano Hincapié: </b>samuel.galeano872@gmail.com</p>
          <p><b>Samuel David Gallo Forero: </b>samueldavidgallo28@gmail.com</p>
          <p><b>Samuel Zuluaga Maldonado: </b>samu11zuluaga@gmail.com</p>
        </div>
        <hr />
        <div className='divcontacto'>
          <h2>Instagram:</h2>
          <p><b>@TEMedellin_</b></p>
        </div>
        <hr />
        <div className='divcontacto'>
          <h2>PQRS y preguntas:</h2>
          <p><b>Escríbenos al 3146702296 - 3196030588 - 3226667671</b></p>
        </div>
      </div>
      
    </div>
  );
}
export default Contactanos;