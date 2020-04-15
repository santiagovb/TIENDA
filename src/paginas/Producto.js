import React, { Component } from 'react'
import ListadeProductos from '../components/ListadeProductos'
import BtnIrATienda from '../components/BtnIrATienda'
import BtnCarrito from '../components/BtnCarrito'
import BtnAdministrarProductos from '../components/BtnAdministrarProductos'
import Barramenu from '../components/estilos/Barramenu.css'




class Producto extends Component {
    state = {
        database: [],
        carrito: {},
        totalitems: 0,
        totalcompra: 0
    }
    async componentDidMount() {
        await this.fetchProductos()
    }
    fetchProductos = async () => {
        let res = await fetch('http://localhost:3006/productos')
        let database = await res.json()
        this.setState({ database })
    }
    handlechange = (e) => {
        let { carrito, totalitems, totalcompra } = this.state
        let eventval = JSON.parse(e.target.value)
        let id = eventval.id.toString()
        let precio = eventval.precio

        if (!Object.keys(carrito).includes(id)) {
            
            this.setState({
                carrito: {
                    ...carrito,
                    [id]: 1
                },
                totalitems: totalitems + 1,
                totalcompra: totalcompra + Number(precio)
            })

        } else {
           
            this.setState({
                carrito: {
                    ...carrito,
                    [id]: carrito[id] + 1
                },
                totalitems: totalitems + 1,
                totalcompra: totalcompra + Number(precio)
            })
        }
    }

    render() {
        let { carrito, totalitems, database, totalcompra } = this.state
        return (
            <div>
                <div className="barramenu">
                    <BtnIrATienda />
                    <BtnCarrito
                        database={database}
                        carrito={carrito}
                        totalitems={totalitems}
                        totalcompra={totalcompra}
                    />
                    <BtnAdministrarProductos />
                </div>
                <ListadeProductos
                    productos={database}
                    onChange={this.handlechange}
                />
            </div>
        )
    }
}
export default Producto