import React, { Component } from 'react'
import ListaCarrito from '../components/ListaCarrito'
import BtnPagar from '../components/BtnPagar'
import BtnIrATienda from '../components/BtnIrATienda'
import estilos from '../components/estilos/carrito.css'
// eslint-disable-next-line no-unused-vars


class Carrito extends Component {

    state = {
        carrito: this.props.location.carrito,
        database: this.props.location.database,
        totalitems: this.props.location.totalitems,
        totalcompra: this.props.location.totalcompra
    }

    render() {
        let { database, carrito, totalitems, totalcompra } = this.state
        return (

            <div className="contenedor">
                <div className="fixed">
                    <BtnIrATienda></BtnIrATienda>
                    <ListaCarrito
                        productos={database}
                        carrito={carrito}
                    ></ListaCarrito>
                </div>
                <div>
                    <div className="flex-item">
                        <div>Total items {totalitems}</div>
                        <div>Valor total de tu compra $ {totalcompra.toLocaleString('es-CO')}</div>
                        <BtnPagar></BtnPagar>
                        <div>Seleccione el medio de pago</div>
                    </div>                    
                </div>
            </div>
        )
    }

}

export default Carrito