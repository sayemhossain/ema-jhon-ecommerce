import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shippingCost = 0;
  for (const product of cart) {
    // console.log(product);
    total += product.price;
    shippingCost += product.shipping;
  }
  let tax = parseFloat(((total * 5) / 100).toFixed(2));
  let grandTotal = total + shippingCost + tax;

  return (
    <div>
      <p>Selected Items: {cart.length} </p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingCost}</p>
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
