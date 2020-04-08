import React, { Component } from 'react'
import axios from 'axios'
import ListaCarrito from '../components/ListaCarrito'

class Carrito extends Component{
 state={
     database:[],
     carrito:this.props.location.carrito
 }

componentDidMount(){
     axios.get('http://localhost:3006/productos')
     .then((res)=>{      
        this.setState({database:res.data})    
    })
     .catch((error)=>{alert(error)})     
     
}
    render(){
        return(
            <div>
                
                
                <ListaCarrito
                productos={this.state.database}  
                carrito={this.state.carrito} 
                >
                </ListaCarrito>
                
                
            </div>
        )
    }

}

export default Carrito