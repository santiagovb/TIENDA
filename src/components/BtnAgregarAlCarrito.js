import React, { Component } from 'react'

 
class BtnAgregarAlCarrito extends Component{ 
state={
        id:this.props.id,
        precio:this.props.precio
      }
    render(){
      let state=JSON.stringify(this.state)
      return(        
        <div>   
         
          <button onClick={this.props.onChange} className="btn" value={state} //value=string
         
          >Agregar al carrito</button>

         </div>
      )
    }  
}
export default BtnAgregarAlCarrito