// src/components/Cart/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext/CartProvider";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (!cart.length) return <p>El carrito está vacío</p>;

  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        width: "300px",
        backgroundColor: "#f8f8f8",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <h2>Carrito</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <span>
            {item.name} x {item.quantity}
          </span>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              padding: "2px 6px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#dc3545",
              color: "white",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      ))}
      <p><strong>Total:</strong> ${totalPrice}</p>
      <button
        onClick={clearCart}
        style={{
          padding: "8px 12px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          marginTop: "8px",
          width: "100%",
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
