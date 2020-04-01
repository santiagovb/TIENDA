import React, { Component } from 'react'
import BtnCrearProducto from '../components/BtnCrearProducto'
import ListadeProductosAdmin from '../components/ListadeProductosAdmin'



class AdministrarProductos extends Component{

   constructor(props){
       super(props)
       this.state={
           database:[]
        }
   }

   async componentDidMount(){

    await this.fetchProductos()

    }
fetchProductos= async ()=>{

    let res = await fetch('http://localhost:3006/productos')
    let database= await res.json()
    this.setState({database})
    console.log(database)
}
  
    render(){
        return(
                <div>
                     <BtnCrearProducto/>
                     <ListadeProductosAdmin
                      productos={this.state.database}
                     />
                </div>
            )
    }
}
export default AdministrarProductos