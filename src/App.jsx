import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavbarTea';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from './components/Nosotros';
import { useState } from 'react';
import { CartContext } from "./context/CartContext";
import Carrito from './components/Carrito';

function App() {
  
  const [carrito, setCarrito] = useState ([]);

  const agregarAlCarrito  =  (item, cantidad) => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);


    if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;
    } else {
        nuevoCarrito.push (itemAgregado);
    }
    setCarrito (nuevoCarrito);
}

const cantidadEnCarrito = () => {
  return carrito.reduce ((acc, prod) => acc + prod.cantidad, 0);
}

const precioTotal = () => {
  return carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0); 
}

const variarCarrito = () => {
  setCarrito ([]);
}

  return (
    <>
      <div>
        <CartContext.Provider value = {{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, variarCarrito}}>
          <BrowserRouter>

            
            <Navbar />

            <Routes> 
              <Route path="/" element= {<ItemListContainer/>} />
              <Route path="/item/:id" element= {<ItemDetailContainer />} />
              <Route path="/productos" element= {<ItemListContainer />} />
              <Route path="/productos/:categoria" element= {<ItemListContainer />} />
              <Route path="/nosotros" element= {<Nosotros />} />
              <Route path="/carrito" element= {<Carrito />} />
            </Routes> 

          </BrowserRouter>
        </CartContext.Provider>
      </div>
    </>
  );
}

export default App
