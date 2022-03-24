import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // facthing data from Api
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // this is for cart
  useEffect(() => {
    const storedCart = getStoredCart();
    // console.log(storedCart);
    const savedProduct = [];
    for (const id in storedCart) {
      // console.log(id);
      const addedProducts = products.find((product) => product.id === id);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        savedProduct.push(addedProducts);
      }
      console.log(addedProducts);
    }
    setCart(savedProduct);
  }, [products]);

  // this is for event handeler
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
