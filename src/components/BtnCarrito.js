import React from 'react'
import { Component } from 'react'
import estilos from './estilos/Btn.css'
import { Link } from 'react-router-dom'
 
function BtnCarrito(){
  return (
    <Link to='/producto/Carrito'>
      <button className='button'>My carrito</button>
      </Link>
  )

}
export default BtnCarrito