import React from 'react'
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Producto from '../paginas/Producto'
import AdministrarProductos from '../paginas/AdministrarProductos'
import NuevoProducto from '../paginas/NuevoProducto'
import NotFound from '../paginas/NotFound';
import EditarProducto from '../paginas/EditarProducto';
import Carrito from '../paginas/Carrito';
import Factura from '../paginas/Factura';

function App() {
  return (
    <BrowserRouter>
      <Switch>{/* switch especifica 404 si no encuentra nada */}
        <Route exact path="/" component={Producto}></Route>
        <Route exact path="/producto" component={Producto}></Route>
        <Route exact path="/producto/Carrito" component={Carrito}></Route>
        <Route exact path="/producto/Carrito/Factura" component={Factura}></Route>
        <Route exact path="/producto/AdministrarProductos" component={AdministrarProductos}></Route>
        <Route exact path="/producto/NuevoProducto" component={NuevoProducto}></Route>
        <Route exact path="/producto/AdministrarProductos/EditarProducto" component={EditarProducto}></Route>
        <Route component={NotFound}></Route>{/* un componente como prop */}
      </Switch>
    </BrowserRouter>
  )
}
export default App
