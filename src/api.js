import { api_key } from "./config";
import defaultMovie from "./Assets/default-movie.png";

export const base_url = `https://api.themoviedb.org/3/`;

function jsonFetch(url) {
  return fetch(`${url}`).then(data => {
    return data.json();
  });
}

function imageUrl(poster_path) {
  if (poster_path == null) {
    return defaultMovie;
  } else return `https://image.tmdb.org/t/p/w500/${poster_path}`;
}

export function getCatogories() {
  return jsonFetch(
    `${base_url}genre/movie/list?api_key=${api_key}&language=en-US}`
  )
    .then(json => {
      return json.genres;
    })
    .catch(err => {
      console.log("error", err);
    });
}

export function getMoviesByCategoryId(categoryId) {
  return jsonFetch(
    `${base_url}discover/movie?api_key=${api_key}&language=en-US&with_genres=${categoryId}`
  )
    .then(json => {
      return json.results.map(movie => ({
        id: movie.id,
        image_path: imageUrl(movie.poster_path),
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
        image_path: imageUrl(json.poster_path),
        name: json.title,
        overview: json.overview,
        release_date: json.release_date
      };
    })
    .catch(err => {
      console.log("error", err);
    });
}

export function searchMoviesByMovieName(movieName, pageNumber) {
  return jsonFetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${api_key}&language=en-US&page=${pageNumber}&include_adult=false`
  )
    .then(json => {
      return json.results.map(movie => ({
        id: movie.id,
        image_path: imageUrl(movie.poster_path),
        name: movie.title
      }));
    })
    .catch(err => {
      console.log("error", err);
    });
}
