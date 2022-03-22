import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { deleteShoppingCart } from "../../utilities/fakedb";

const Cart = (props) => {
  const { cart } = props;

  //   this is for adding total price and shipping price
  let total = 0;
  let shippingCost = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total = total + product.price * product.quantity;
    shippingCost += product.shipping;
  }
  //   this is for tax
  const tax = parseFloat(((total * 5) / 100).toFixed(2));
  //   this is for grand total
  const grandTotal = total + tax + shippingCost;
  const handleDeleteCart = () => {
    deleteShoppingCart();
  };
  return (
    <div>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <div onClick={handleDeleteCart} className="btn btn-one">
        Clear Cart <FontAwesomeIcon icon={faTrashCan} />
      </div>
      <div className="btn btn-two">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default Cart;
