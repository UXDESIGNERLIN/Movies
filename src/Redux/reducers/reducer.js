import { combineReducers } from "redux";

const defaultState = {
  moviesInCart: [
    {
      movieId: "",
      movieName: "",
      quantity: null
    }
  ]
};

const rootReducer = (state = defaultState.moviesInCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.movie];
    default:
      return state;
  }
};

//const rootReducer = combineReducers({ cart });

export default rootReducer;
