import React from "react";
// eslint-disable-next-line no-unused-vars
import estilos from '../components/estilos/NuevoProducto.css'
import axios from 'axios'

class NuevoProducto extends React.Component {
    state = {}
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(this.state))


        axios.post('http://localhost:3006/productos', this.state)
            .then(resultado => alert(resultado.data))
            .catch(error => alert((error.data))
            )
    }
    render() {
        return (
            <div>
                <h3>Nuevo producto</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="espaciado">
                        <input
                            //title="Inserte el Nombre"
                            //required
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.nombre}//evita que existan 2 fuentes de información
                        />
                    </div>
                    <div className="espaciado">
                        <input
                            /* required
                            title="Inserte la descripción"  */
                            type="text"
                            placeholder="Descripción"
                            name="descripcion"
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.descripcion}//
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
                            name="unidades_disponibles"
                            onChange={this.handleChange} //onchange verifica las propiedades del input                    
                            value={this.state.unidades_disponibles}
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
                        <input className="btncrear" type="submit" value="crear" />
                    </div>
                </form>
            </div>
        )
    }
}
export default NuevoProducto

