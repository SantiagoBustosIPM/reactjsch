import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; // Asegúrate de importar el componente NavBar
import ItemListContainer from './components/ItemListContainer'; // Componente para el catálogo
import ItemDetailContainer from './components/ItemDetailContainer'; // Componente para el detalle del producto
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar /> {/* Navegación global */}
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenido al Catálogo" />} />
        
        {/* Ruta para categorías específicas */}
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría de Productos" />} />
        
        {/* Ruta para el detalle del producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
