// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // export nombrado
import ItemDetail from "../ItemDetail/ItemDetail"; // export default

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setDetail(found || {});
      })
      .catch(console.log);
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? <ItemDetail detail={detail} /> : <p>Cargando...</p>}
    </main>
  );
};

export default ItemDetailContainer;
