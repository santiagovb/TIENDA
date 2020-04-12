import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
//import estilos from './estilos/CardAdmin.css'
import estilosflex from './estilos/estilosflex.css'

class CardCarrito extends Component {

  render() {
    const { imagen, descripcion, precio, cantidad, totalitem } = this.props
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
            <div className="elementoArriba ">Imagen</div>
            <div className="elemento ">{cantidad}</div>
          </div>
          <div>
            <div className="elementoArriba ">Total compra</div>
            <div className="elemento ">{totalitem}</div>
          </div>
        </div>
        {/* <div>
          <table>
            <tr>
              <th>Imagen</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Valor total compras</th>
            </tr>
            <tr>
              <td><a target="_blank" rel="noopener noreferrer" href={imagen}><img className="img" src={imagen} alt="" /></a></td>
              <td>{descripcion}</td>
              <td>$ {precio}</td>
              <td>{cantidad}</td>
              <td>$ {totalitem}</td>
            </tr>
          </table>
        </div> */}
      </div>
    )
  }
}
export default CardCarrito


