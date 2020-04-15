import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import estilos from '../components/estilos/Btn.css'
import { Link } from 'react-router-dom';


class BtnEditar extends Component {
  render() {
    return (
      <Link to={
        {
          pathname: '/producto/AdministrarProductos/EditarProducto',
          estado: this.props
        }
      }
      >
        <button className="button" type="button" >Editar</button>
      </Link>
    )
  }
}
export default BtnEditar