import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Pages/Home";

import MovieDetail from "./Pages/MovieDetail";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import "./style.css";
import Footer from "./Components/Footer";
import MovieListContainer from "./Pages/MovieListContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    //const history = createBrowserHistory({ basename: "/Movies/dist" });

    return (
      <div>
        <div className="App">
          <Router /*history={history}*/>
            <Header />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route exact path="/category">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/search">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/movie">
                <Redirect to="/home" />
              </Route>
              <Route
                path="/category/:categoryId"
                component={MovieListContainer}
              />
              <Route path="/movie/:movieId" component={MovieDetail} />
              <Route path="/cart" component={Cart} />
              <Route path="/search/:keyWords" component={MovieListContainer} />
            </Switch>

            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
