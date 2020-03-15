import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import MoviesList from "./Pages/MoviesList";
import MovieDetail from "./Pages/MovieDetail";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
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
        <div className="App">
          <Router>
            <Header />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/category/:categoryId"
                exact
                component={MoviesList}
              />
              <Route path="/movie/:movieId" exact component={MovieDetail} />
              <Route path="/cart" exact component={Cart} />
            </Switch>

            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
