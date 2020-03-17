import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import "./style.css";

function Header(props) {
  // const [inputValue, setInputValue] = useState("");

  const handleSearchChange = e => {
    e.persist();
    //setInputValue(e.target.value);
    setTimeout(() => {
      props.history.push(`/search/${e.target.value}`);
    }, 0);
  };

  // const clearInputValue = () => {
  //setInputValue("");
  //};

  return (
    <div className="page-container header">
      <Link to="/">
        <button /*onClick={() => clearInputValue()}*/ className="button">
          Home
        </button>
      </Link>

      <label className="search-label" htmlFor="search-input">
        <input
          //value={inputValue}
          type="text"
          id="search-input"
          placeholder="Search..."
          onChange={e => {
            handleSearchChange(e);
          }}
        />

        <i className="fa fa-search search-icon" aria-hidden="true"></i>
      </label>

      <Link to="/cart">
        <button /*onClick={() => clearInputValue()}*/ className="button">
          SHOPPING CART
        </button>
      </Link>
    </div>
  );
}
export default withRouter(Header);
