import React from 'react'
import { Component } from "react";
import estilos from './estilos/Card.css' 
/* import legend_img from '../imagenes/legend.png'
import react_img from '../imagenes/react.png'
import buso_img from '../imagenes/buso.png'*/


class Card extends Component{
    render(){
        const {nombre,descripcion,imagen,unidadesDisponibles,precio}=this.props
        return(
        
        <div className="row">
            <div class="column">
              <div class="card">
                <h3>{nombre}</h3>{/* nombre */}
                <p>{descripcion}</p>{/* descripción */}
                <img className="tamañoimagen" src={imagen} alt="Imagen no encontrada"/>{/* imagen */}
                <h3>Unidades disponibles: {unidadesDisponibles}</h3>{/* esto sera dinamico */}
                <h3 className="price">$ {precio}</h3>{/* precio */}
                <button class="btn">Agregar al carrito<span class="bg"></span></button>
              </div>
            </div>
          
            {/* <div class="column">
              <div class="card">
                <h3>Legend</h3>
                <p>El puño de tulkas</p>
                <img className="tamañoimagen" src={legend_img} alt="Imagen no encontrada"/>
                <h3 className="price">$ 25.000</h3>
                <button class="btn">Agregar al carrito<span class="bg"></span></button>
              </div>
            </div>
            
            <div class="column">
              <div class="card">
                <h3>React basico</h3>
                <p>Arrazando </p>
                <img className="tamañoimagen" src={react_img} alt="Imagen no encontrada"/>
                <h3 className="price">$ 28.000</h3>
                <button class="btn">Agregar al carrito<span class="bg"></span></button>
              </div>
            </div>
            
            <div class="column">
              <div class="card">
                <h3>Balrog code</h3>
                <p>Latigo de fuego</p>
                <img className="tamañoimagen" src={buso_img} alt="Imagen no encontrada"/>
                <h3 className="price">$ 30.000</h3>
                <button class="btn">Agregar al carrito<span class="bg"></span></button>
              </div>
            </div> */}
        </div>             
        )
    }
}
export default Card