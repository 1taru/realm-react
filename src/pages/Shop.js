import React from 'react';
import '.././App.css'; // Asegúrate de importar el archivo CSS

function Shop() {
  return (
    <div className="page-container">
    <div className="shop">
      <h1>Nuestra Tienda</h1>
      <p>Descubre nuestra amplia gama de productos.</p>
      {/* Aquí puedes listar productos, agregar filtros, etc. */}
    </div>
    </div>
  );
}

export default Shop;