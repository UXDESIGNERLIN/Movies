import React, { Component } from "react";
import { getMovieByMovieId } from "../../api";
import "./style.css";
import { connect } from "react-redux";
import { addMovieToCart } from "../../Redux/actions/actions";
import Cart from "../Cart";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, showCart: false };
    this.addToCart = this.addToCart.bind(this);
    this.closeCart = this.closeCart.bind(this);
    this.cartRef = React.createRef();
  }

  componentDidMount() {
    getMovieByMovieId(this.props.match.params.movieId).then(movie => {
      this.setState({ movie });
    });
  }

  addToCart(movie) {
    this.props.addMovieToCart({
      movieId: movie.id,
      movieName: movie.name,
      movie_image: movie.image_path,
      quantity: 1
    });
    this.setState({ showCart: true });
    this.scrollToCart();
  }

  scrollToCart() {
    setTimeout(() => {
      window.scrollTo(0, document.getElementById("cart").offsetTop);
    }, 0);
  }

  closeCart() {
    this.setState({ showCart: false });
  }

  render() {
    const { movie, showCart } = this.state;
    return (
      <>
        <div className="movie-detail-card">
          <div className="movie-detail-card-header">
            <h1>{movie.name}</h1>
            <p>({movie.release_date})</p>
          </div>
          <div className="movie-detail-card-body">
            <div className="movie-detail-image-container">
              <img className="image" src={movie.image_path} alt={movie.name} />
            </div>
            <div className="movie-detail-card-content-container">
              <div className="movie-detail-overview">{movie.overview}</div>
              <button
                onClick={() => this.addToCart(movie)}
                className="movie-detail-cart-button button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div id="cart">
          {showCart && <Cart showCart={() => this.closeCart()} />}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovieToCart: movie => {
    dispatch(addMovieToCart(movie));
  }
});

export default connect(null, mapDispatchToProps)(MovieDetail);
