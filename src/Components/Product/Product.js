import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="img-container">
        <img src="" alt="" />
      </div>
      <div className="product-details">
        <h2></h2>
        <p className="price">Price: </p>
        <div className="common">
          <p>
            <small>Manufacturer: </small>{" "}
          </p>
          <p>
            <small>Rating: start</small>
          </p>
        </div>
      </div>
      <button className="btn-cart">
        <span>Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
