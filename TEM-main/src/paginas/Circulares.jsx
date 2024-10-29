import React from 'react'
import Menu from '../componentes/menu'
import Pie_de_pagina from '../componentes/Pie_de_pagina'
import Coonatra from '../imagenes/Coonatra.png'
import Sur from '../imagenes/Sur.png'

function Circulares() {
    return(
        <div>
            <Menu/>
            <div className='circular'>
                <h2>Información sobre el Circular Coonatra y el Circular Sur</h2>
                <p>A continuación se muestran las rutas y tarifas de ambos Circulares:</p>
                <div className='circular1'>
                    <h3>Cicular Coonatra:</h3>
                    <img src={Coonatra} alt="imagen ruta circular coonatra" width={450}/>
                    <p><b>Tarifa 2024:</b> 3200 pesos</p>
                    <p>Para más información, te invitamos a visitar la página oficial del Circular Coonatra: <a href="https://coonatra.com/circular-coonatra/">Haz click aquí</a></p>
                </div>
                <div>
                    <h3>Circular Sur:</h3>
                    <img src={Sur} alt="imagen ruta circular sur" width={450}/>
                    <p><b>Tarifa 2024:</b> 3200 pesos</p>
                    
                </div>
                <p><b>Próximamente mayor información.</b></p>
            </div>

            <Pie_de_pagina/>
        </div>

    );
}

export default Circulares;