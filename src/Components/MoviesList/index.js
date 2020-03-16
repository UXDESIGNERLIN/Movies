import React, { Component } from "react";

import { Link } from "react-router-dom";

class MoviesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="movies-list-wrapper">
          {this.props.movies.map(movies => {
            return (
              <Link to={`/movie/${movies.id}`} key={movies.id.toString()}>
                <div className="movies-list-card">
                  <div className="image-container">
                    <img
                      className="image"
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

/**console.log(this.props.history.Back()); */
