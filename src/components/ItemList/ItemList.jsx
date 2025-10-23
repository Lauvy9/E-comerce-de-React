import React from "react";
import { useCart } from "../context/CartContext/CartProvider";

const ItemList = ({ list }) => {
  const { addToCart } = useCart();

  if (!list.length) return <p>Cargando productos...</p>;

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {list.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", width: "200px", textAlign: "center" }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <button onClick={() => addToCart(product)} style={{ marginTop: "8px", padding: "8px 12px", borderRadius: "4px", border: "none", backgroundColor: "#007bff", color: "white", cursor: "pointer" }}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
