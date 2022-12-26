import React from 'react';
import Product from './Product';
import "./store.css"

export default function Products({products}) {
  return (
    <main className="block col-2">
      <div className="bahan">
      {products.map((product) => (
        <Product key={product._id} product={product}/>
      ))}
      </div>
    </main>
  );
}
