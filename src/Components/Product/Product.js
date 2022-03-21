import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { img, name, seller, price, ratings } = props.product;

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
            <small>Rating: {ratings} start</small>
          </p>
        </div>
      </div>
      <div
        className="btn-cart"
        onClick={() => props.handleAddToCart(props.Product)}
      >
        Add to Cart
      </div>
    </div>
  );
};

export default Product;
