import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p className="price">Price: ${price}</p>
        <div className="common">
          <p>
            <small>Manufacturer: {seller}</small>{" "}
          </p>
          <p>
            <small>Rating: {ratings}start</small>
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          props.handleAddToCart(props.product);
        }}
        className="btn-cart"
      >
        <span>Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
