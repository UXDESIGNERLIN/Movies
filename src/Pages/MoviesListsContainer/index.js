import React, { Component } from "react";
import { getMoviesByCategoryId } from "../../api";
import MoviesList from "../../Components/MoviesList";
import { Link } from "react-router-dom";
import "./style.css";

class MoviesListsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    getMoviesByCategoryId(this.props.match.params.categoryId).then(movies => {
      this.setState({ movies });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.search.substring(1)}</h1>
        <div className="movies-list-wrapper">
          <MoviesList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default MoviesListsContainer;
