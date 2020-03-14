import React, { Component } from "react";
import { getMovieByMovieId } from "../../api";
import "./style.css";

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: {} };
  }

  componentDidMount() {
    getMovieByMovieId(this.props.match.params.movieId).then(movie => {
      this.setState({ movie });
    });
  }

  render() {
    const movie = this.state.movie;
    return (
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
            <button className="movie-detail-cart-button button">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
