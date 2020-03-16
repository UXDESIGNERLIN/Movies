import React, { Component } from "react";
import { searchMoviesByMovieName } from "../../api";

import { Link } from "react-router-dom";
//import { withRouter } from "react-router-dom";
//import MoviesList from "../../Components/MoviesList";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: [],
      totalPages: null,
      pageNumber: 1
    };
    this.myRef = React.createRef();
    this.callBackRef = this.callBackRef.bind(this);
  }

  callBackRef(node, index) {
    if (this.state.movieResults.length !== index + 1) return;
    if (this.myRef.current) this.myRef.current.disconnect();
    this.myRef.current = new IntersectionObserver(entries => {
      if (
        entries[0].isIntersecting &&
        this.state.pageNumber <= this.state.totalPages
      ) {
        this.searchMovies();
      }
    });
    if (node) this.myRef.current.observe(node);
  }

  searchMovies() {
    console.log("being called..", this.state.pageNumber);
    searchMoviesByMovieName(
      this.props.match.params.keyWords,
      this.state.pageNumber
    ).then(json => {
      console.log("jj", json[1]);
      this.setState({
        totalPages: json[0],
        movieResults: this.state.movieResults.concat(json[1]),
        pageNumber: this.state.pageNumber + 1
      });
    });
  }

  componentDidMount() {
    this.searchMovies();
  }

  /*componentDidUpdate(prevProps) {
    if (prevProps.match.params.keyWords !== this.props.match.params.keyWords) {
      this.searchMovies();
    }
  }*/

  //if (this.state.movieResults.length === index + 1) {

  render() {
    return (
      <div>
        <div className="movies-list-wrapper">
          <div className="movies-list-wrapper">
            {this.state.movieResults.map((movies, index) => {
              return (
                <Link to={`/movie/${movies.id}`} key={movies.id.toString()}>
                  <div
                    ref={node => this.callBackRef(node, index)}
                    className="movies-list-card"
                  >
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
      </div>
    );
  }
}

export default SearchResults;
