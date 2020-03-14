import { api_key } from "./config";

export const base_url = `https://api.themoviedb.org/3/`;

function jsonFetch(url) {
  return fetch(`${url}`).then(data => {
    return data.json();
  });
}

export function getCatogories() {
  return jsonFetch(
    `${base_url}genre/movie/list?api_key=${api_key}&language=en-US}`
  ).then(json => {
    return json.genres;
  });
}

export function getMoviesByCategoryId(categoryId) {
  return jsonFetch(
    `${base_url}discover/movie?api_key=${api_key}&language=en-US&with_genres=${categoryId}`
  )
    .then(json => {
      return json.results.map(movie => ({
        id: movie.id,
        image_path: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
        name: movie.title
      }));
    })
    .catch(err => {
      console.log("error", err);
    });
}

export function getMovieByMovieId(movieId) {
  return jsonFetch(
    `${base_url}movie/${movieId}?api_key=${api_key}&language=en-US`
  )
    .then(json => {
      return {
        id: json.id,
        image_path: json.poster_path,
        name: json.title
      };
    })
    .catch(err => {
      console.log("error", err);
    });
}
