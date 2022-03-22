import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  //   this is for adding total price
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  //this is for shpping price
  let totalPriceForShipping = 0;
  for (const product of cart) {
    totalPriceForShipping += product.shipping;
  }
  //   this is for tax
  const tax = (total * 5) / 100;
  //   this is for grand total
  const grandTotal = total + tax + totalPriceForShipping;

  return (
    <div>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalPriceForShipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <div className="btn btn-one">
        Clear Cart <FontAwesomeIcon icon={faTrashCan} />
      </div>
      <div className="btn btn-two">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default Cart;
