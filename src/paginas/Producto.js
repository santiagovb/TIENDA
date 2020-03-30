import React, { Component } from 'react'
import ListadeProductos from '../components/ListadeProductos'
import BtnIrATienda from '../components/BtnIrATienda'
import BtnCarrito from '../components/BtnCarrito'
import BtnNuevoProducto from '../components/BtnAdministrarProductos'
import database from '../database/database.json'



 
class Producto extends Component{
constructor(props){
    super(props)
    this.state={ //inicial
        database
        }
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