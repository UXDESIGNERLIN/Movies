import React, { Component } from "react";
import { getMoviesByCategoryId } from "../../api";
import MoviesList from "../../Components/MoviesList";
import { Link } from "react-router-dom";
import "./style.css";

class MoviesListsContainer extends Component {
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
        this.getMoviesByCategoryId();
      }
    });
    if (node) this.myRef.current.observe(node);
  }

  componentDidMount() {
    this.getMoviesByCategoryId();
  }

  getMoviesByCategoryId() {
    getMoviesByCategoryId(
      this.props.match.params.categoryId,
      this.state.pageNumber
    ).then(json => {
      this.setState({
        totalPages: json[0],
        movieResults: this.state.movieResults.concat(json[1]),
        pageNumber: this.state.pageNumber + 1
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.search.substring(1)}</h1>
        <div className="movies-list-wrapper">
          <MoviesList
            movies={this.state.movieResults}
            callBackRef={(node, index) => this.callBackRef(node, index)}
          />
        </div>
      </div>
    );
  }
}

export default MoviesListsContainer;
