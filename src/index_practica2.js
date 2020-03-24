import React from 'react'
import ReactDOM from 'react-dom'


const Elemen_Menubar=(     
    <div>            
        <ul>
            <li><a href="default.asp">Inicio</a></li>
            <li><a href="news.asp">Productos</a></li>
            <li><a href="contact.asp">Mi carrito</a></li>
        </ul> 
        <h1>Bienvenido a la tienda de camisas </h1> 
    </div>
)

//obtener contenedores
const cont_barraMenu=document.getElementById('barraMenu')

//desplegar contenedores

ReactDOM.render(Elemen_Menubar,cont_barraMenu)


