import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Card.css'
import BtnAgregarAlCarrito from '../components/BtnAgregarAlCarrito'

class Card extends Component{    
  
  render(){
        const {nombre,descripcion,imagen,unidadesDisponibles,precio}=this.props
        return(    
          <div className="row">
              <div className="column">
                <div className="card">
                  <h3>{nombre}</h3>{/* nombre */}
                  <p>{descripcion}</p>{/* descripción */}
                  <img className="tamañoimagen" src={imagen} alt="Imagen no encontrada"/>{/* imagen */}
                  <h3>Unidades disponibles: {unidadesDisponibles}</h3>{/* esto sera dinamico */}
                  <h3 className="price">$ {precio}</h3>{/* precio */}               
                 <BtnAgregarAlCarrito/>
                </div>
              </div>    
          </div>             
        )
    }
}
export default Card


