import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';

function ProductTips() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Tips</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTips;
