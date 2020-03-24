import React from 'react'
import { Component } from "react";
import estilos from './estilos/BarraDeMenu.css'
import icon from '../iconos/supermarket.png'


class BarraDeMenu extends Component{
    render(){
        return(
            <div className="espaciado">
            <ul>
                <li><a href="#home">Carrito de compras</a></li>
                <li><a href="#news">Mi carrito</a></li>                
                <li className="derecha"><a class="active " href="#about">units</a></li>
                <li className="derecha"><img className="icon" src={icon} alt="icono no encontrado"/></li>
               
                
            </ul>
        </div>
        )
    }
}
export default BarraDeMenu