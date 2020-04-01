/* eslint-disable no-unused-vars */
import React from 'react'
import { Component } from "react";
import estilos from '../components/estilos/Btn.css'
import { Link } from 'react-router-dom';


function BtnIrATienda(){
    return(
        <Link to="/producto">
        <button className="button">Ir a la tienda</button>
        </Link>
    )
}
export default BtnIrATienda

