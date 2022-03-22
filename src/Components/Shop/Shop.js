import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //using useEffect and load data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
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
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${cart.length}</p>
        <p>Total Shipping Charge: ${cart.length}</p>
        <p>Tax: ${cart.length}</p>
        <h4>Grand Total: ${cart.length}</h4>
        <div className="btn btn-one">
          Clear Cart <FontAwesomeIcon icon={faTrashCan} />
        </div>
        <div className="btn btn-two">
          Review Order <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
