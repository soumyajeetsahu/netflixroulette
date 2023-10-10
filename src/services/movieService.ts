import axios from "axios";

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
