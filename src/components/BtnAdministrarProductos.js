import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'
import { Link } from 'react-router-dom'

 
function BtnAdministrarProductos(props){
  return (
    <Link to="/producto/AdministrarProductos">
      <button className='button'>Administrar Productos</button>
     </Link>
  )

}
export default BtnAdministrarProductos