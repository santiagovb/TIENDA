import React, { Component } from 'react'
import ListadeProductos from '../components/ListadeProductos'
import BtnIrATienda from '../components/BtnIrATienda'
import BtnCarrito from '../components/BtnCarrito'
import BtnNuevoProducto from '../components/BtnAdministrarProductos'

 
class Producto extends Component{
 state={
     database:[]
 }

/* //esto funciona asi funciona
constructor(props){
    super(props)
    this.state={ //inicial
        database
        }
    }  
     */
    async componentDidMount(){
        await this.fetchProductos()
    }
    fetchProductos= async ()=>{
        let res = await fetch('http://localhost:3006/productos')
        let database= await res.json()
        this.setState({database})
    }

    render(){
    return(
        <div>
            <BtnIrATienda/>
            <BtnCarrito/>
            <BtnNuevoProducto/>                                 
            <ListadeProductos
                productos={this.state.database}            
            />          
        </div>
        )
    }
}

export default Producto