import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.log);
  }, []);

  return (
    <section>
      <h1>{titulo}</h1>
      <ItemList list={products} />
    </section>
  );
};

export default ItemListContainer;
