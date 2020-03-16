//import { combineReducers } from "redux";

const defaultState = {
  moviesInCart: [
    {
      movieId: "",
      movieName: "",
      movie_image: "",
      quantity: null
    }
  ]
};

const movieExists = (movies, movie) => {
  return movies.find(el => el.movieId === movie.movieId);
};

const rootReducer = (state = defaultState.moviesInCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (movieExists(state, action.movie)) {
        return state;
      } else return [action.movie, ...state];

    case "REMOVE_FROM_CART":
      let newState = state.filter(el => {
        return el.movieId !== action.movie.movieId;
      });
      return newState;

    case "UPDATE_QUANTITY":
      let updateState = state.map(el => {
        if (el.movieId === action.movieId) {
          el.quantity = action.quantity;
        }
        return el;
      });
      return updateState;

    case "EMPTY_CART":
      return [];

    default:
      return state;
  }
};

export default rootReducer;
