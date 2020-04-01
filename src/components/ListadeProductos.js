import React from 'react'
import Card from './Card'


function ListadeProductos(props){    
    return(
        <div>    
            {
            props.productos.map((producto)=>{//map itera los datos del estado y los devuelve en una card
            return (
                    <Card 
                    /* PROPS-propiedades de la tarjeta, estas seran dinamicas */  
                        key={producto.id}
                        nombre={producto.nombre}
                        descripcion={producto.descripcion}
                        imagen={producto.imagen}
                        unidadesDisponibles={producto.unidades_disponibles}
                        precio={producto.precio}
                    />
                    )
                })}        
        </div>
        )
    }

export default ListadeProductos