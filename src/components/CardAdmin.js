import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/CardAdmin.css'
import BtnEditar from '../components/BtnEditar'
import BtnEliminar from '../components/BtnEliminar'
class CardAdmin extends Component {
  render() {
    const { id, nombre, descripcion, imagen, unidades_disponibles, precio } = this.props
    return (
      <div>
        <table>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Unidades Disponibles</th>
            <th>Precio</th>
            <th>Editar producto</th>
            <th>Elimininar producto</th>
          </tr>
          <tr>
            <td><a target="_blank" rel="noopener noreferrer" href={imagen} ><img className="img" src={imagen} alt="" /></a></td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{unidades_disponibles}</td>
            <td>{precio}</td>
            <td>{<BtnEditar
              id={id}
              nombre={nombre}
              descripcion={descripcion}
              imagen={imagen}
              unidades_disponibles={unidades_disponibles}
              precio={precio}
            />}
            </td>
            <td>{<BtnEliminar
              id={id}
            />}
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
export default CardAdmin


