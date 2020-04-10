import React, { Component } from 'react'
import ListaCarrito from '../components/ListaCarrito'
import BtnPagar from '../components/BtnPagar'
import BtnIrATienda from '../components/BtnIrATienda'
// eslint-disable-next-line no-unused-vars
import estilos from '../components/estilos/Carrito.css'

class Carrito extends Component {
    state = {
        carrito: this.props.location.carrito,
        database: this.props.location.database,
        totalitems:this.props.location.totalitems

    }

    render() {
        let { database, carrito, totalitems} = this.state
        return (

            <div className="container">
                <div className="fixed" >
                <BtnIrATienda></BtnIrATienda>
                
                    <ListaCarrito
                        productos={database}
                        carrito={carrito}
                    ></ListaCarrito>
                </div>
                <div className="flex-item">

                    <BtnPagar></BtnPagar>
                    <div>total items {totalitems}</div>
                    <div>Valor total de tu compra </div>
                    <div></div>
                </div>
            </div>
        )
    }

}

export default Carrito