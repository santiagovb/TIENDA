import React from 'react'
import CardCarrito from './CardCarrito'

function ListaCarrito(props){

    return(
        <div>    
            {
            // eslint-disable-next-line array-callback-return
            props.productos.map((producto)=>{//map itera los datos del estado y los devuelve en una card
                let cantidad=props.carrito[producto.id] 
                if (cantidad){
                    return (
                        <CardCarrito
                        /* PROPS-propiedades de la tarjeta, estas seran dinamicas */  
                        imagen={producto.imagen}  
                        descripcion={producto.descripcion}  
                        precio={producto.precio}
                        id={producto.id}
                        cantidad={cantidad}
                        
                        //ids={props.carrito.values}
                        />
                        )
                }

                
              
                })}        
        </div>
        )
    }

export default ListaCarrito