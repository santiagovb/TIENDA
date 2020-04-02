import React from "react";
// eslint-disable-next-line no-unused-vars
import estilos from '../components/estilos/EditarProducto.css'

class EditarProducto extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.location.estado
    }


    handleChange = (e) => {

        this.setState(

            {
                [e.target.name]: e.target.value
            }
        )

    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3006/productos/')
    }
    render() {
        return (
            <div>
                <h3>Editar Producto</h3>
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
                        <input className="btncrear" type="submit" value="Guardar" />
                    </div>
                </form>
            </div>
        )
    }
}
export default EditarProducto

