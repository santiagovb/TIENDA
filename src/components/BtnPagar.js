import React from 'react'
import { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import estilos from './estilos/Btn.css'
import { Link } from 'react-router-dom'

 
class BtnPagar extends Component{
  render(){
    return (
    <Link to={
              {
                pathname:'/producto/Carrito/Factura',
                productos:this.props.productos,
                carrito:this.props.carrito
                    
               }     
             }       
    >
            <button className='button'>Pagar { this.props.totalitems}</button>
            
    </Link>
    )
  }
}
export default BtnPagar