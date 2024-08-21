import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="product-detail">
      <h1>Detalles del Producto</h1>
      <p>ID del producto: {id}</p>
      {/* Aquí puedes cargar los detalles del producto usando el ID */}
    </div>
  );
}

export default ProductDetail;