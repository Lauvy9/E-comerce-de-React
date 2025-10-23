import React, { useState } from "react";
import { useCart } from "../context/CartContext/CartProvider";

const CartIcon = () => {
  const { cart, removeFromCart, clearCart, totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", top: "16px", right: "16px", zIndex: 1000 }}>
      <div style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
        🛒
        {totalItems > 0 && <span style={{ marginLeft: "4px", backgroundColor: "red", color: "white", borderRadius: "50%", padding: "2px 6px", fontSize: "12px" }}>{totalItems}</span>}
      </div>

      {open && (
        <div style={{ position: "absolute", top: "36px", right: 0, width: "300px", backgroundColor: "#f8f8f8", padding: "16px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
          <h3>Carrito</h3>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: "8px" }}>
                  <strong>{item.name}</strong> x {item.quantity}
                  <p style={{ fontSize: "12px", margin: 0 }}>{item.description || "Sin descripción"}</p>
                  <button onClick={() => removeFromCart(item.id)} style={{ padding: "2px 6px", border: "none", borderRadius: "4px", backgroundColor: "#dc3545", color: "white", cursor: "pointer", marginTop: "4px" }}>X</button>
                </div>
              ))}
              <button onClick={clearCart} style={{ marginTop: "8px", padding: "8px 12px", borderRadius: "4px", border: "none", backgroundColor: "#007bff", color: "white", cursor: "pointer", width: "100%" }}>Vaciar carrito</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
