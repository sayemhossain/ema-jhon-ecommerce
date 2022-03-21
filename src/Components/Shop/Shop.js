import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  //using useEffect and load data
  useEffect(() => {
    fetch("products.json")
      .then((res) => {
        res.json();
      })
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container"></div>
      <div className="cart-container">
        <h4>Order summary</h4>
      </div>
    </div>
  );
};

export default Shop;