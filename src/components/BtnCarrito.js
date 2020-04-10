import React from 'react'
import { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'
import { Link } from 'react-router-dom'
 
class BtnCarrito extends Component{
  render(){
    return (
    <Link to={
              {
                pathname:'/producto/Carrito',
                carrito:this.props.carrito,
                database:this.props.database,
                totalitems:this.props.totalitems,
                totalcompra:this.props.totalcompra
               }     
             }       
    >
            <button className='button'>My carrito Total { this.props.totalitems}</button>
            
    </Link>
    )
  }
}
export default BtnCarrito