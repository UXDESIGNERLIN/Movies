import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCatogories } from "../../api";
import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 0 });
    getCatogories().then(categories => {
      this.setState({
        categories
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Select Categories</h1>
        <div className="category-wrapper">
          {this.state.categories.map(category => {
            return (
              <Link
                to={{
                  pathname: `/category/${category.id}`,
                  search: category.name
                }}
                key={category.id.toString()}
              >
                <div>
                  <div className="category-card">
                    <p className="category-name">{category.name}</p>
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

export default Home;
