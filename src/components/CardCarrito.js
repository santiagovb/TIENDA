import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import estilosflex from './estilos/estilosflex.css'

class CardCarrito extends Component {
  render() {
    const { imagen, precio, cantidad, totalitem } = this.props
    return (
      <div>
        <div className="contenedor">
          <div>
            <div className="elementoArriba">Imagen</div>
            <div className="elemento"><a target="_blank" rel="noopener noreferrer" href={imagen}><img className="img" src={imagen} alt="" /></a></div>
          </div>

          <div>
            <div className="elementoArriba ">Precio</div>
            <div className="elemento ">{precio}</div>
          </div>
          <div>
            <div className="elementoArriba ">Cantidad</div>
            <div className="elemento ">{cantidad}</div>
          </div>
          <div>
            <div className="elementoArriba ">Total compra</div>
            <div className="elemento ">{totalitem}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default CardCarrito


