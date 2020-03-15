import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeMovieFromCart,
  updateMovieQuantity
} from "../../Redux/actions/actions";
import "./style.css";
import CartRow from "../../Components/CartRow";

class Cart extends Component {
  constructor(props) {
    super(props);
    console.log("cartshop", this.props.store);
    this.closeCart = this.closeCart.bind(this);
  }

  closeCart() {
    this.props.showCart();
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h1>Cart</h1>
          <button
            onClick={() => this.closeCart()}
            className="button cart-close-button"
          >
            X
          </button>
        </div>
        <hr />
        {this.props.store.map(movie => (
          <CartRow
            closeCart={() => this.closeCart()}
            key={movie.movieId.toString()}
            movieInCart={movie}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  removeMovieFromCart: movie => dispatch(removeMovieFromCart(movie)),
  updateMovieQuantity: (movieId, quantity) =>
    dispatch(updateMovieQuantity(movieId, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
