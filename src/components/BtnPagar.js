// eslint-disable-next-line no-unused-vars
import React, { useCallback, Component } from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'
import axios from 'axios'
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class BtnPagar extends Component {

  state = Object.entries(this.props.carrito)


  handleClick = () => {
    this.state.forEach((element, index) => {
      let id = element[0]
      let pedido = element[1]
      axios.get(`http://localhost:3006/productos/${id}`)
        .then((res) => {
          let inventario = res.data[0].unidades_disponibles
          if (pedido > inventario) {
            alert('Tu pedido supera las unidades disponibles')
          } else if (pedido <= inventario) {
            let nuevasunidades = inventario - pedido
            let url = `http://localhost:3006/descontarUnidades/${id}`
            let body = { 'unidades_disponibles': `${nuevasunidades}` }
            return axios.put(url, body)
          }
        })
        .then((responseput) => {
          if (index === this.state.length - 1) { alert(responseput.data) }
        })
        .catch((error) => { alert(error) })
    });
  }
  render() {
    return (
      <button className='button' onClick={this.handleClick}> Pagar </button>
    )
  }
}
export default BtnPagar