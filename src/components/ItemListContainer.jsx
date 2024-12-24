import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada a fetch para cargar productos desde el archivo JSON
    const fetchProducts = async () => {
      const response = await fetch('/products.json');  // Accedemos al archivo JSON en public
      const data = await response.json();

      // Filtramos productos si se ha seleccionado una categoría
      if (categoryId) {
        const filteredProducts = data.filter(product => product.category === categoryId);
        setProducts(filteredProducts);
      } else {
        setProducts(data);  // Si no hay categoría, mostramos todos los productos
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
