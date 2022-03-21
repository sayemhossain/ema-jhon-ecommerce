import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;
