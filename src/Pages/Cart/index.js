import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFromCart } from "../../Redux/actions/actions";
import "./style.css";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.closeCart = this.closeCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  closeCart() {
    this.props.showCart();
  }

  removeFromCart(movie) {
    this.props.removeMovieFromCart(movie);
    if (this.props.store.length <= 1) {
      this.closeCart();
    }
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
          <div className="cart-item-row" key={movie.movieId}>
            <div className="cart-image-container ">
              <img className="image" src={movie.movie_image} />
            </div>
            <div className="cart-content-container">
              <p className="cart-name"> {movie.movieName}</p>
            </div>
            <div className="cart-content-container">
              <p>Quantity : {movie.quantity}</p>
            </div>
            <div className="cart-content-container">
              <button
                onClick={() => this.removeFromCart(movie)}
                className="button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  removeMovieFromCart: movie => {
    dispatch(removeMovieFromCart(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
