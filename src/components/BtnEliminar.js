import React from 'react'
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import estilos from '../components/estilos/Btn.css'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class BtnEliminar extends Component {

  handleClick = () => {
    confirmAlert({
      title: 'Cuidado!!!',
      message: 'Realmente deseas eliminar este producto.',
      buttons: [
        {
          label: 'Si',
          onClick: () => {
            axios.delete(`http://localhost:3006/productos/${this.props.id}`)
              .then((res) => alert(res.data))
              .catch(error => alert(error))
          }
        },
        {
          label: 'No',
        }
      ]
    });
  };

  render() {
    return (
      <button onClick={this.handleClick} className="button" type="button">Eliminar</button>
    )
  }
}


export default BtnEliminar