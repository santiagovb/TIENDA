import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Card.css'
import BtnAgregarAlCarrito from './BtnAgregarAlCarrito'

class Card extends Component{    
  
  render(){
        const {id,nombre,descripcion,imagen,unidadesDisponibles,precio,onChange}=this.props
        return(        
          <div className="row">
              <div className="column">
                <div className="card">
                  <h3>{nombre}</h3>{/* nombre */}
                  <p>{descripcion}</p>{/* descripción */}
                  <img className="tamañoimagen" src={imagen} alt="Imagen no encontrada"/>{/* imagen */}
                  <h3>Unidades disponibles: {unidadesDisponibles}</h3>{/* esto sera dinamico */}
                  <h3 className="price">$ {precio}</h3>{/* precio */}               
                 <BtnAgregarAlCarrito
                    id={id}
                    precio={precio}
                    onChange={onChange}
                 /> 
                </div>
              </div>    
          </div>             
        )
    }
}
export default Card


