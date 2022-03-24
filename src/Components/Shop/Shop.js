import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // facthing data from Api
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container"></div>
      <div className="cart-container">
        <h3 className="cart-header">Order Summary</h3>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
