import React from 'react'
import { Link } from 'react-router-dom'
import si from '../imagenes/siisoo.jpg'

function Pie_de_pagina(){
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <hr />
          <h1 className="encabezado mt-5 pt-4">Transpórtate en Medellin</h1>
          <div className="text-center mx-auto">
            <div className='info-section'>
            <h2>¿Cómo funcionamos?</h2>
            <p>Esta página utiliza un sistema avanzado de búsqueda y recopilación de información desde distintas páginas oficiales de medios de transporte para brindar una ruta, hora, ubicación y lugar de manera exacta para que puedas llegar seguro a tu destino bajo cualquier metodo de transporte.</p>
          </div>
            
            <img class='medios' src={si} alt="imagen medios de transporte" width={400}/>
            
            
            </div>
            <hr/>
          <h3>¿Tienes dudas?</h3>
          <p class='medios'>Escríbenos al 3146702296 - 3196030588 - 3226667671</p>
          <h3>Nuestro Instagram:</h3>
          <p>@TEMedellin_</p>
        </div>
      </div>
    </div>
  )
}

export default Pie_de_pagina;