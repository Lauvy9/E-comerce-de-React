// src/components/ItemDetail/ItemDetail.jsx
import React from "react";

const ItemDetail = ({ detail }) => {
  if (!detail) return null;

  return (
    <div className="item-detail">
      <h2>{detail.name}</h2>
      <p>{detail.description}</p>
      {detail.price && <p>Precio: ${detail.price}</p>}
      {detail.image && <img src={detail.image} alt={detail.name} />}
    </div>
  );
};

export default ItemDetail; // ✅ export default
