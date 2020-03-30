import React from "react";
// eslint-disable-next-line no-unused-vars
import estilos from '../components/estilos/NuevoProducto.css'



class NuevoProducto extends React.Component{
//verifique el estado inicial asi state={"Nombre":"santiago----"}

   state={}
   
   handleChange=(e)=>{     
    //esta es una forma antigua de hacerlo
    /* let contenidoformulario={}
    contenidoformulario[e.target.name]=e.target.value
    this.setState(contenidoformulario) */ 

    //esta es la nueva forma
       this.setState(
    //cada vez que se cambia vamos formando el objeto con los valores del input
    //aqui crearia una promesa para ordenar mis elementos
           {
                [e.target.name] : e.target.value
            }
        )  
         
    }
    //que hacer con la informacion empaquetada
   
    handleSubmit=(e)=>{   
        e.preventDefault()
        console.log(this.state)        
    }
    render(){
        return(
            <div>
                <h3>Nuevo producto</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="espaciado">
                        <input 
                            //title="Inserte el Nombre"
                            //required
                            type="text"
                            placeholder="Nombre"
                            name="Nombre" 
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.Nombre}//evita que existan 2 fuentes de información
                            />
                    </div>  
                    <div className="espaciado">
                        <input 
                            /* required
                            title="Inserte la descripción"  */                   
                            type="text"
                            placeholder="Descripción"
                            name="Descripción"   
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.Descripción}//
                        />
                    </div> 
                    <div className="espaciado">
                        <input 
                            /* required  
                            title="Inserte la url de la imagen"    */                         
                            type="url"
                            placeholder="imagen"
                            name="imagen"   
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.imagen}
                        />
                    </div> 
                    <div className="espaciado">
                        <input 
                           /*  required  
                            title="Inserte las unidades disponibles"  */
                            type="number"
                            placeholder="unidadesDisponibles"
                            name="unidadesDisponibles"   
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.unidadesDisponibles}
                        />
                    </div> 
                    <div className="espaciado">
                        <input 
                           /*  required  
                            title="Inserte el precio"  */
                            type="number"
                            placeholder="precio"
                            name="precio"   
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.precio}
                        />
                    </div>    
                    <div className="espaciado">
                        <input className="btncrear" type="submit" value="crear"/> 
                    </div>
                </form>                
            </div>             
        )
    }
} 
export default NuevoProducto

