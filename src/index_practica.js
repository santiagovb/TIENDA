// const elemento = document.createElement('h1')
// const texto=document.createTextNode('yo conquistaré react.js')
// elemento.appendChild(texto)
// /* elemento.innerText = 'yo conquistaré react.js' */
// //obteniendo mi contenedor
// const contenedor=document.getElementById('root')

// contenedor.appendChild(elemento)

import React from 'react'
import ReactDOM from 'react-dom'


const usuario={
    nombre:'santiago',
    apellido:'vargas',
    edad:32,
    icono:' https://api.adorable.io/avatars/158/abott@adorable.png' 
}



// function infousuario(usr){
//     let usuario=usr ? `${usr.nombre}`:'el usuario no existe'
//     return usuario  

//     //return `${usr.nombre} ${usr.apellido}`
// }

function obtenersaludo(usr){
    var saludo= usr ? `Hola ${usr.nombre}`:`Para realizar el pago primero debes identificarte!!!` 
    return  <h1> {saludo} </h1>
}

function usuarioicon(usr){
    var icono = usr ? `${usr.icono}` :'no encuentro el icono'
    return icono
}

//cosntrucción de los elementos


//const elemento = <h1> { infousuario(usuario) } </h1>
const elemento=<div>{obtenersaludo(usuario)} </div>
//importantisimo, las imagenes en jsx se deben cerrar no es tan sencillo como en html
const elemento2_= <img src={usuario.icono} alt='producto no disponible'/>

//crear varios elementos 
const elementopadre=(
    
    <div>
        <h1>Bienvenido a nuestra tienda {obtenersaludo(usuario)}</h1>
        <div>
        <img src={usuarioicon(usuario)} alt="el usuario no ha sido registrado"/>
        </div>
        
        <ul>
            <li>hola</li>
            <li>consquistando React</li>
            <li>Esta muy bacana esta herramienta</li>
            
            
        </ul>
    </div>
)

//obtener contenedores

const contenedor=document.getElementById('root')
const contenedor2=document.getElementById('elemento2')
const contenedorpadre=document.getElementById('elementopadre')

//desplegar contenedores

ReactDOM.render(elemento,contenedor)
ReactDOM.render(elemento2_,contenedor2)
ReactDOM.render(elementopadre,contenedorpadre)
//-------------------------------------------
