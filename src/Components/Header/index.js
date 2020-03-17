import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

function Header(props) {
  const handleSearchChange = e => {
    e.persist();
    setTimeout(() => {
      props.history.push(`/search/${e.target.value}`);
    }, 0);
  };

  return (
    <div className="page-container header">
      <Link to="/">
        <button className="button">Home</button>
      </Link>

      <label className="search-label" htmlFor="search-input">
        <input
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
        <button className="button">SHOPPING CART</button>
      </Link>
    </div>
  );
}
export default withRouter(Header);
