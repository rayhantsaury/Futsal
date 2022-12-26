import React, { useEffect, useState } from "react";
import Products from './Products';
import axios from "axios";
import { useLocation } from "react-router-dom";
function StoreCard() {
  const [products, setProducts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/products" + search);
      setProducts(res.data);
    };
    fetchProducts();
  }, [search]);

 
  return (
    <div>
      <div className="row">
      <Products products={products} />
      </div>
    </div>
  );
}

export default StoreCard;
