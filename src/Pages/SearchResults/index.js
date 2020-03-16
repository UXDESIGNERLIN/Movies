import React, { Component } from "react";
import { searchMoviesByMovieName } from "../../api";
import { withRouter } from "react-router-dom";
import MoviesList from "../../Components/MoviesList";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: []
    };
  }

  componentDidMount() {
    searchMoviesByMovieName(this.props.match.params.keyWords, 1).then(json => {
      this.setState({ movieResults: json });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.keyWords !== this.props.match.params.keyWords) {
      searchMoviesByMovieName(this.props.match.params.keyWords, 1).then(
        json => {
          this.setState({ movieResults: json });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <div className="movies-list-wrapper">
          <MoviesList movies={this.state.movieResults} />
          {this.props.match.params.keyWords === "" &&
            this.props.history.goBack()}
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResults);
