import React, { useCallback } from 'react'
import { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class BtnPagar extends Component {

  state = Object.entries(this.props.carrito)


  handleClick = () => {
    /* alert(this.state)
    console.log(this.state[0][1]) */

    this.state.forEach((element, index) => {
      let id = element[0]
      let pedido = element[1]



      axios.get(`http://localhost:3006/productos/${id}`)
        .then((res) => {
          /* alert(JSON.stringify(res.data[0].unidades_disponibles)) */
          /* console.log(JSON.stringify(res.data[0].unidades_disponibles)) */
          let inventario = res.data[0].unidades_disponibles
          if (pedido > inventario) {
            alert('Tu pedido supera las unidades disponibles')
          } else if (pedido <= inventario) {
            let nuevasunidades = inventario - pedido
            return axios.put(`http://localhost:3006/discountUnitsById/${id}`, { 'unidades_disponibles': `${nuevasunidades}` })
          }
        })
        .then((responseput) => {
          if (index === this.state.length - 1) { alert('Tus productos seran enviados') }

        })
        .catch((error) => { alert(error) })
    });
  }

  render() {
    return (
      <button className='button' onClick={this.handleClick}> Pagar</button>
    )
  }
}
export default BtnPagar