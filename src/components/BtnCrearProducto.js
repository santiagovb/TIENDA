import React from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'//esta clase se coparte para todos los botones
import { Link } from 'react-router-dom'

function BtnCrearProducto(props) {
  return (
    <Link to="/producto/NuevoProducto">
      <button className='button'>Crear producto</button>
    </Link>
  )
}
export default BtnCrearProducto