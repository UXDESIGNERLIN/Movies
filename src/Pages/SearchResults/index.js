import React, { Component } from "react";
import { searchMoviesByMovieName } from "../../api";

import { Link } from "react-router-dom";
import MoviesList from "../../Components/MoviesList";
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

  render() {
    return (
      <div>
        <div className="movies-list-wrapper">
          <div className="movies-list-wrapper">
            <MoviesList
              movies={this.state.movieResults}
              callBackRef={(node, index) => this.callBackRef(node, index)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
