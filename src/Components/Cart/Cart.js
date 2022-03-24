import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { deleteShoppingCart } from "../../utilities/fakedb";

const Cart = () => {
  return (
    <div>
      <p>Selected Items: </p>
      <p>Total Price: </p>
      <p>Total Shipping Charge: </p>
      <p>Tax: </p>
      <h4>Grand Total: </h4>
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
