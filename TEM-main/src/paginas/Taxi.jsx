import React from 'react'
import Menu from '../componentes/menu'
import Pie_de_pagina from '../componentes/Pie_de_pagina'
import Tax from '../imagenes/Tax.png'

function Taxi() {
    return(
        <div>
            <Menu/>
            <div className='tax'>
                <h2 class>Información sobre los Taxis</h2>
                <p>El servicio de taxi en la ciudad de Medellin puede ser público o privado. Tú puedes parar un taxi por la calle si está conduciendo sin pasajeros. Si prefieres, puedes contratar un servicio personal de taxi comunicándote con ellos por su página web.</p> 
                <p>A continuación se muestran las tarifas de una página web de taxis:</p>
                <img src={Tax} alt="imagen tarifas Taxi" width={450}/>
                <p>Este es un ejemplo de una página de taxis. Si deseas tener más información sobre ella, te invitamos a visitarla: <a href="https://www.tax-individual.com.co">Haz click aquí</a></p>
                <p><b>Próximamente mayor información.</b></p>
            </div>
            

            <Pie_de_pagina/>
        </div>

    );
}

export default Taxi;