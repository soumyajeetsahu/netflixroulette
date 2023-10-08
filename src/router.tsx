import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./error-page";
import React from "react";
import SearchForm from "./components/SearchForm/searchForm";

import MovieInfo from "./components/movieDetails/movieInfo";
import { getMovieById } from "./components/movieDetails/movieDetail";
import Counter from "./components/counter/counter";
import MovieListPage from "./components/movieList/movieListPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MovieListPage />} errorElement={<ErrorPage />}>
      <Route index element={<SearchForm />} />
      <Route
        path=":movieId"
        element={<MovieInfo />}
        loader={getMovieById}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)