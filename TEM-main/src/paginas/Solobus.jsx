import React from 'react'
import Menu from '../componentes/menu'
import Pie_de_pagina from '../componentes/Pie_de_pagina'
import soloruta from '../imagenes/soloruta.png'

function Solobus() {
    return(
        <div>
            <Menu/>
            <div className='tax'>
                <h2>Información sobre el Solobus</h2>
                <p>Solobus es una empresa de buses que se especializa por tener una gran cantidad de rutas que pasan por Itagüí, la comuna 15 (Guayabal) y el centro de Medellín.</p>
                <p>A continuación te mostramos un ejemplo de las rutas que realiza un bus de Solobus:</p>
                <img src={soloruta} alt="imagen mapa de la ruta San Francisco - Éxito - Punto Clave de un bus" width={450}/>
                <p><b>Tarifa 2024:</b> 3200 pesos</p>
                <p>Si deseas ver una información más detallada, te invitamos a visitar la página oficial de Solobus: <a href="https://www.solobus.com.co">Haz click aquí</a></p>
                <p><b>Próximamente mayor información.</b></p>
            </div>

            <Pie_de_pagina/>
        </div>

    );
}

export default Solobus;