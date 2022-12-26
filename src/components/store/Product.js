import React from 'react';

export default function Product({product}) {
  const PF = 'http://localhost:5000/images/'
  return (
    <div className='point'>
      {product.photo && <img src={PF+product.photo} alt="" className="postProduct" />}
      <div className='detail'>
        <h3>{product.name}</h3>
        <div>Rp.{product.price}</div>
        <a href='https://api.whatsapp.com/send?phone=6282261183474&text=Saya%20Mau%20Beli%20Barang%20ini'>
          <button>Beli</button></a>
      </div>
    </div>
  );
}
