import React, { Component } from 'react'

 
class BtnAgregarAlCarrito extends Component{ 
/*   state=this.props  */ 

    render(){
    
      return(
        
        <div>      
          <button onClick={this.props.onChange} className="btn" value={this.props.id} name={this.props.precio}     
         
          >Agregar al carrito</button>

         </div>
      )
    }  
}
export default BtnAgregarAlCarrito