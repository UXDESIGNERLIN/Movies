import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesInCart: []
    };
  }

  componentDidMount() {
    this.setState({ moviesInCart: this.props.store });
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h1>cart</h1>
          <button>X</button>
        </div>
        <hr />
        {this.state.moviesInCart.map(movie => (
          <div key={movie.movieId}>{movie.movieName}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

export default connect(mapStateToProps, null)(Cart);
