import React, { Component } from 'react'
import ListadeProductos from '../components/ListadeProductos'
import BtnIrATienda from '../components/BtnIrATienda'
import BtnCarrito from '../components/BtnCarrito'
import BtnAdministrarProductos from '../components/BtnAdministrarProductos'



class Producto extends Component {
    state = {
        database: [],
        totalitems:0,
        totalcompra:0,
        carrito: {},

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
        let { carrito,totalitems,totalcompra } = this.state
        
            if(Object.keys(carrito).includes(e.target.value)){
                this.setState({
                    carrito: {
                        ...this.state.carrito,
                        [e.target.value]: carrito[e.target.value]+1
                    },
                    totalitems:totalitems+1,
                    totalcompra:totalcompra+Number(e.target.name)
                    
                })
            }else{

                this.setState({
                    carrito:{
                    ...this.state.carrito,
                    [e.target.value]:1
                },
                totalitems:totalitems+1,
                totalcompra:totalcompra+Number(e.target.name)
                })
            }
        }

    render() {
        let {carrito,totalitems,database,totalcompra}=this.state
        return (
            
            <div>
                <BtnIrATienda />
                <BtnCarrito
                    database={database}
                    carrito={carrito}
                    totalitems={totalitems}
                    totalcompra={totalcompra}
                    
                />
                <BtnAdministrarProductos />
                <ListadeProductos
                    productos={database}
                    onChange={this.handlechange}
                />
            </div>
        )
    }
}
export default Producto