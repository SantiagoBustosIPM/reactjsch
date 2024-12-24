import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el parámetro de la URL

const ItemDetailContainer = () => {
  const { itemId } = useParams(); // Obtenemos el parámetro de itemId
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simulación de llamada a API o mock del producto
    const fetchItem = async () => {
      const fetchedItem = await fetch(`/api/item/${itemId}`).then(res => res.json());
      setItem(fetchedItem);
    };

    fetchItem();
  }, [itemId]); // Re-cargar cuando cambie el itemId

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      {/* Agregar más detalles aquí */}
    </div>
  );
};

export default ItemDetailContainer;
