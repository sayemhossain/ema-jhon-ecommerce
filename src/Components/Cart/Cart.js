import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div>
      <p>Selected Items: {props.cart.length}</p>
      <p>Total Price: ${props.cart.length}</p>
      <p>Total Shipping Charge: ${props.cart.length}</p>
      <p>Tax: ${props.cart.length}</p>
      <h4>Grand Total: ${props.cart.length}</h4>
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
