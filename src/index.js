import React from 'react'
import ReactDOM from 'react-dom'
import BarraDeMenu from './components/BarraDeMenu'
import Card from './components/Card'
import database from './database/database.json'


const contenedorBarrademenu=document.getElementById('Barrademenu')
const contenedorCard=document.getElementById('Card')

const {nombre,descripcion,imagen,unidadesDisponibles,precio}=database.data[0]//Card PROPS

ReactDOM.render(<BarraDeMenu

/>,contenedorBarrademenu)

ReactDOM.render(<Card 
    /* PROPS-propiedades de la tarjeta, estas seran dinamicas */  
        nombre={nombre}
        descripcion={descripcion}
        imagen={imagen}
        unidadesDisponibles={unidadesDisponibles}
        precio={precio}
        
/>,contenedorCard)






