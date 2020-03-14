import React, { Component } from "react";
import { getMoviesByCategoryId } from "../../api";
import { Link } from "react-router-dom";
import "./style.css";

class MoviesList extends Component {
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
        <h1>{this.props.location.name}</h1>
        <div class="movies-list-wrapper">
          {this.state.movies.map(movies => {
            return (
              <Link to={`/movie/${movies.id}`}>
                <div className="movies-list-card" key={movies.id.toString()}>
                  <div class="image-container">
                    <img
                      class="image"
                      src={movies.image_path}
                      alt={movies.name}
                    />
                  </div>
                  <div>
                    <p className="movies-list-name">{movies.name}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MoviesList;
