import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart.seller);

  //using useEffect and load data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // this is for addedting cart
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3 className="cart-header">Order Summary</h3>
        <Cart key={cart.id} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
