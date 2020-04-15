import React, { Component } from 'react'
import ListaCarrito from '../components/ListaCarrito'
import BtnPagar from '../components/BtnPagar'
import BtnIrATienda from '../components/BtnIrATienda'
import estilos from '../components/estilos/carrito.css'
import estilosfactura from '../components/estilos/factura.css'

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

            <div className="contcarrito">

                <div className="elemento1">
                    {/*  <BtnIrATienda></BtnIrATienda> */}
                    <ListaCarrito
                        productos={database}
                        carrito={carrito}
                    ></ListaCarrito>
                </div>

                <div className="elemento2">
                    <div className="contentfactura">
                        <div className="elementofactura fondogris">Total items: {totalitems}</div>
                        <div className="elementofactura">Valor total de tu compra<p>$ {totalcompra.toLocaleString('es-CO')}</p></div>
                        <div className="elementofactura">
                            <p> Seleccione el medio de pago</p>
                            <img className="imagen" src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" alt="" />
                            <img className="imagen" src="https://images.squarespace-cdn.com/content/v1/5a1899b251a584c59851ac92/1553621616656-ZHE8W4QE20ZM4788RNP0/ke17ZwdGBToddI8pDm48kDAv91l_EVpAtt3T82Wm1m9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFYJKH45azV1OdE3sZLTRbs6ZFFp8hOYq1RoRuprWGoaTqWIIaSPh2v08GbKqpiV54/BotonPSE.png" alt="" />
                           <div>
                            <BtnPagar
                            carrito={carrito}
                            
                            ></BtnPagar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Carrito