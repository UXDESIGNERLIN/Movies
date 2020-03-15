export const addMovieToCart = movie => ({
  type: "ADD_TO_CART",
  movie
});

export const removeMovieFromCart = movie => ({
  type: "REMOVE_FROM_CART",
  movie
});

export const updateMovieQuantity = (movieId, quantity) => (
  console.log(quantity),
  {
    type: "UPDATE_QUANTITY",
    movieId,
    quantity
  }
);
