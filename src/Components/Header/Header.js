import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <a href="/">Home</a>
          <a href="/oders">Orders</a>
          <a href="/inventory">Inventory</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
