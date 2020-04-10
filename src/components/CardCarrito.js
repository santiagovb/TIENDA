import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/CardAdmin.css'

class CardCarrito extends Component{    
  
  render(){
        const {imagen,descripcion,precio,id,cantidad,totalitem}=this.props
        return(    
          <div>
            <table>
                  <tr>
                    <th>Imagen</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>compra total items</th>
                  </tr>  
                  <tr>
                    <td><a target="_blank" rel="noopener noreferrer" href={imagen}><img  className="img" src={imagen} alt=""/></a></td>
                    <td>{descripcion}</td>                  
                    <td>{precio}</td>
                    <td>{cantidad}</td>
                    <td>{totalitem}</td>
                  </tr>              
             </table>            
          </div>             
        )
    }
}
export default CardCarrito


