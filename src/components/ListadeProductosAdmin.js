import React from 'react'
import CardAdmin from './CardAdmin'
function ListadeProductosAdmin(props) {
    return (
        <div>
            {
                props.productos.map((producto) => {//map itera los datos del estado y los devuelve en una card
                    return (
                        <CardAdmin
                            id={producto.id}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            imagen={producto.imagen}
                            unidades_disponibles={producto.unidades_disponibles}
                            precio={producto.precio}
                        />
                    )
                })}
        </div>
    )
}

export default ListadeProductosAdmin