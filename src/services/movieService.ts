import axios from "axios";
import { MoviesData } from "../components/movieList/movieList";

const baseURL = "http://localhost:4000";

export type FetchMoviesParams = {
  searchQuery?: string;
  genreName?: string;
  sortByField?: string;
};

export const getAllMoviesList = (params: FetchMoviesParams) => {
  const { searchQuery, genreName, sortByField } = params;
  const url =
    `${baseURL}/movies?` +
    (genreName ? `filter=${genreName}&` : "") +
    (searchQuery ? `search=${searchQuery}&searchBy=title&` : "") +
    (sortByField ? `sortBy=${sortByField}&sortOrder=asc` : "");

  return axios.get(url);
};

export const getMovieById = (movieId: number) => {
  const url = `${baseURL}/movies/${movieId}`;
  return axios.get(url);
};


export const addMovie = (movie: MoviesData) => {
  const url = `${baseURL}/movies`;
  return axios.post(url,movie);
};

export const editMovie = (movie: MoviesData) => {
  const url = `${baseURL}/movies`;
  return axios.put(url,movie);
};
