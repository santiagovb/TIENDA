import React, { Component } from 'react'
import ListadeProductos from '../components/ListadeProductos'
import BtnIrATienda from '../components/BtnIrATienda'
import BtnCarrito from '../components/BtnCarrito'
import BtnAdministrarProductos from '../components/BtnAdministrarProductos'



class Producto extends Component {
    state = {
        database: [],
        incremento: 1,
        totalitems:0,
        carrito: {}
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

        let { incremento, carrito,totalitems } = this.state

        Object.keys(carrito).includes(e.target.value)
            ?
            this.setState({
                carrito: {
                    ...this.state.carrito,
                    [e.target.value]: carrito[e.target.value] + incremento,
                 },
                 totalitems:totalitems+1
            })
            :
            this.setState({
                carrito: {
                    ...this.state.carrito,
                    [e.target.value]: incremento,
                    
                },
                totalitems:totalitems+1
            })
        }

   /*  handlechange = (e) => {

        let { incremento, carrito } = this.state
     
        console.log(carrito)

        if (!Object.keys(this.state.carrito).length) {
            this.setState({
                carrito: {                    
                    [e.target.value]: incremento
                }
            }
            )   
        } else{
            if(Object.keys(carrito).includes(e.target.value)){
                this.setState({
                    carrito: {
                        ...this.state.carrito,
                        [e.target.value]: carrito[e.target.value]+incremento
                    }
                })
            }else{

                this.setState({
                    carrito:{
                    ...this.state.carrito,
                    [e.target.value]:incremento
                }
                })
            }
        }
       

    } */

    render() {
        return (
            <div>
                <BtnIrATienda />
                <BtnCarrito
                    carrito={this.state.carrito}
                    totalitems={this.state.totalitems}
                    
                />
                <BtnAdministrarProductos />
                <ListadeProductos
                    productos={this.state.database}
                    onChange={this.handlechange}
                />
            </div>
        )
    }
}
export default Producto