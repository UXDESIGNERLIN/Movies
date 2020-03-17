const defaultState = {
  moviesInCart: []
};

const movieExists = (movies, movie) => {
  return movies.find(el => el.movieId === movie.movieId);
};

const removeMovie = (movies, movie) => {
  return movies.filter(el => el.movieId !== movie.movieId);
};

const updatePurchaseQuantity = (movies, id, quantity) => {
  return movies.map(el => {
    if (el.movieId === id) {
      el.quantity = quantity;
    }
    return el;
  });
};

const rootReducer = (state = defaultState.moviesInCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (movieExists(state, action.movie)) {
        return state;
      } else return [action.movie, ...state];

    case "REMOVE_FROM_CART":
      return removeMovie(state, action.movie);

    case "UPDATE_QUANTITY":
      return updatePurchaseQuantity(state, action.movieId, action.quantity);

    case "EMPTY_CART":
      return [];

    default:
      return state;
  }
};

export default rootReducer;
