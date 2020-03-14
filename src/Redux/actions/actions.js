export const Set_Categories = "Set_Categories";
export const Get_Movies_By_Categories = "Get_Movies_By_Categories";
export const Get_Movie_By_Id = "Get_Movies_By_Id";

export function setCategories() {
  return {
    type: Set_Categories,
    categories
  };
}

export function getMoviesByCategories(categories) {
  return {
    type: Get_Movies_By_Categories,
    movies
  };
}

export function getMovieById(movieId) {
  return {
    type: Get_Movie_By_Id,
    movie
  };
}
