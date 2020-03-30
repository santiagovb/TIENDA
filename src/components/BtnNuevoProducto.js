import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'
import { Link } from 'react-router-dom'

 
function BtnNuevoProducto(props){
  return (
    <Link to="/producto/NuevoProducto">
      <button className='button'>Crear producto</button>
     </Link>
  )

}
export default BtnNuevoProducto