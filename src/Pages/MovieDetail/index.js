import React, { Component } from "react";
import { getMovieByMovieId } from "../../api";

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
    return <div>{this.state.movie.name}</div>;
  }
}

export default MovieDetail;
