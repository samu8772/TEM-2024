import React from 'react'
import Menu from '../componentes/menu'
import Pie_de_pagina from '../componentes/Pie_de_pagina'
import mmetro from '../imagenes/mmetro.png'

function Metro() {
    return(
        <div>
            <Menu/>
            <div className='tax'>
                <h2>Información sobre el Metro</h2>
                <p>A continuación se muestran las tarifas y rutas del Metro:</p>
                <img src={mmetro} alt="imagen mapa del metro" width={450}/>
                <h5>Las tarifas del metro en el 2024 son las siguientes:</h5>
                <p><b>Frecuente:</b> 3.210 pesos</p> 
                <p><b>Al portador:</b> 3.650 pesos</p> 
                <p><b>Eventual:</b> 3.650 pesos </p>
                <p><b>Adulto mayor:</b> 2.900 pesos </p>
                <p><b>Estudiantil municipio:</b> 1.350 pesos</p>
                <p><b>PDC:</b> 2.350 pesos.</p>
                <div className="row mt-4">
                    <p>Para mayor información, te invitamos a visitar la página oficial del Metro: <a href="https://www.metrodemedellin.gov.co">Haz click aquí</a></p>
                    <p><b>Próximamente mayor información.</b></p>
                </div>
            </div>

            <Pie_de_pagina/>
        </div>

    );
}

export default Metro;