import React from 'react'
import Menu from '../componentes/menu'
import Init from '../componentes/Init'
import metro from '../imagenes/metro.png'
import solobus from '../imagenes/solobus.png'
import taxi from '../imagenes/taxi.png'
import circular from '../imagenes/circular.png'
import Pie_de_pagina from '../componentes/Pie_de_pagina'

function PP() {
  return (
    <div className='login'>
      <Menu/>
      
      <div></div>
        <div>
          <h1 class='tituloprincipal'>MEDIOS DE TRANSPORTE</h1>
        </div>
        <div className='principal'>
          <img class='metro' src={metro} alt="imagen metro" width={220} height={130}/>
          

          <img src={solobus} alt="imagen solobus" width={220} height={150}/>
       </div>

       <div className='principal'>
          <h2 class='subtitulo'><a href="/Metro">Metro</a></h2>
          <h2 class='subtitulo'><a href="/Solobus">Solobus</a></h2>
       </div>
        
       <div className='principal'>
         <img src={taxi} alt="imagen taxi" width={220} height={150}/>
         <img class='metro' src={circular} alt="imagen circular coonatra" width={220} height={130}/>
       </div>

       <div className='principal'>
        <h2 class='subtitulo'><a href="/Taxi">Taxi</a></h2>
        <h2 class='subtitulo'><a href="/Circulares">Circulares</a></h2>
       </div>
       <Pie_de_pagina/>
     </div>
      
  );
}
export default PP;