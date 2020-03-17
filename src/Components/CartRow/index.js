import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeMovieFromCart,
  updateMovieQuantity
} from "../../Redux/actions/actions";
import "./style.css";

class CartRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableQuantity: false,
      quantityValue: 1
    };

    this.removeFromCart = this.removeFromCart.bind(this);
    this.editQuantity = this.editQuantity.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.saveQuantity = this.saveQuantity.bind(this);
  }

  removeFromCart(movie) {
    this.props.removeMovieFromCart(movie);
    if (this.props.store.length <= 1) {
      this.props.closeCart();
    }
  }

  editQuantity() {
    this.setState({ editableQuantity: true });
  }

  handleQuantityChange(e) {
    e.target.value >= 1 && this.setState({ quantityValue: e.target.value });
  }

  saveQuantity(movieId) {
    this.props.updateMovieQuantity(movieId, this.state.quantityValue);
    this.setState({ editableQuantity: false });
  }

  render() {
    let movie = this.props.movieInCart;
    return (
      <div className="cart-item-row" key={movie.movieId}>
        <div className="cart-image-container ">
          <img className="image" src={movie.movie_image} />
        </div>
        <div className="cart-content-container">
          <p className="cart-name"> {movie.movieName}</p>
        </div>
        <div className="cart-content-container">
          <div>
            Quantity :
            {this.state.editableQuantity ? (
              <>
                <input
                  min="1"
                  type="number"
                  className="cart-quantity"
                  onChange={e => this.handleQuantityChange(e)}
                />
                <button
                  className="button"
                  onClick={() => {
                    this.saveQuantity(movie.movieId);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <span
                className="cart-quantity"
                onClick={() => this.editQuantity()}
              >
                {movie.quantity}
              </span>
            )}
          </div>
        </div>
        <div className="cart-content-container">
          <button onClick={() => this.removeFromCart(movie)} className="button">
            Remove
          </button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartRow);
