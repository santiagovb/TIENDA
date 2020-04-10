import React, { Component } from 'react'
import ListaCarrito from '../components/ListaCarrito'

class Factura extends Component{

    render(){
        return(
        <div>
            <ListaCarrito
            productos={this.props.location.productos}
            carrito={this.props.location.carrito}
            >

            </ListaCarrito>
        <div>
           
        </div>
            <h1>A nombre de: usuario</h1>
            <div>{this.props.lista}</div>
            <h2>Total articulos:</h2>
            <h2>Precio total:</h2>
            <button>finalizar pago</button>

            </div>
            
        )
    }

}
export default Factura