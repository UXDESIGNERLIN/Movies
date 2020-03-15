import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../Pages/Cart";

const redirectToCart = () => {
  this.props.history.push(`/cart`);
};

function Header() {
  return (
    <div className="page-container">
      <Link to="/cart">
        <button className="button">SHOPPING CART</button>
      </Link>
    </div>
  );
}
export default Header;
