import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/context/CartContext/CartProvider";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartIcon from "./components/cart/CartIcon";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartIcon /> {/* Icono fijo del carrito */}
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="Nuestros Productos" />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
