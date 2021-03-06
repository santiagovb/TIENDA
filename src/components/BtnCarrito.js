import React from 'react'
import { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'
import { Link } from 'react-router-dom'


class BtnCarrito extends Component {
  render() {
    return (
      <Link to={
        {
          pathname: '/producto/Carrito',
          database: this.props.database,
          carrito: this.props.carrito,
          totalitems: this.props.totalitems,
          totalcompra: this.props.totalcompra
        }
      }
      >
        <button className='button'>Mi carrito<div className="sizeFontNumberItemscar"><img className="sizeImgCar" src="https://image.flaticon.com/icons/svg/1374/1374091.svg" alt="" />{this.props.totalitems} </div></button>
      </Link>
    )
  }
}
export default BtnCarrito