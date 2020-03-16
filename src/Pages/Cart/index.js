import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeMovieFromCart,
  updateMovieQuantity,
  emptyCart
} from "../../Redux/actions/actions";
import "./style.css";
import CartRow from "../../Components/CartRow";

class Cart extends Component {
  constructor(props) {
    super(props);

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
          <div>
            <button
              onClick={() => {
                this.props.emptyCart();
                this.closeCart();
              }}
              className="button"
            >
              Empty Cart
            </button>
            {!this.props.location && (
              <button onClick={() => this.closeCart()} className="button">
                X
              </button>
            )}
          </div>
        </div>
        <hr />
        {this.props.store.map(movie => (
          <CartRow
            closeCart={() => this.closeCart()}
            key={movie.movieId}
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
    dispatch(updateMovieQuantity(movieId, quantity)),
  emptyCart: () => dispatch(emptyCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
