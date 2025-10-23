import React from "react";
import { useCart } from "../context/CartContext/CartProvider";

const ItemCard = ({ product }) => {
  const { addToCart } = useCart(); // Usamos el contexto del carrito

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      width: "200px",
      textAlign: "center"
    }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "8px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCard;
