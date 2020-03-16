import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

import MovieDetail from "./Pages/MovieDetail";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import SearchResults from "./Pages/SearchResults";
import "./style.css";
import Footer from "./Components/Footer";
import MoviesListsContainer from "./Pages/MoviesListsContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="App">
          <Router>
            <Header />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/category/:categoryId"
                exact
                component={MoviesListsContainer}
              />
              <Route path="/movie/:movieId" exact component={MovieDetail} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/search/:keyWords" exact component={SearchResults} />
            </Switch>

            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
