import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import MoviesList from "./Pages/MoviesList";
import MovieDetail from "./Pages/MovieDetail";
import Header from "./Components/Header";
import "./style.css";
import Footer from "./Components/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/category/:categoryId"
                exact
                component={MoviesList}
              />
              <Route path="/movie/:movieId" exact component={MovieDetail} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
