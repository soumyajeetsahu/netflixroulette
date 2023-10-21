import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./error-page";
import React from "react";
import SearchForm from "./components/SearchForm/searchForm";

import MovieInfo from "./components/movieDetails/movieInfo";
import { getMovieById } from "./components/movieDetails/movieDetail";
import Counter from "./components/counter/counter";
import MovieListPage from "./components/movieList/movieListPage";
import MovieForm from "./components/modals/MovieForm/movieForm";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MovieListPage />} errorElement={<ErrorPage />}>
      <Route element={<SearchForm />}>
        <Route index />
        <Route path="new" element={<MovieForm />} />
        <Route path=":movieId/edit" element={<MovieForm />} loader={getMovieById}/>
      </Route>
      <Route
        path=":movieId"
        element={<MovieInfo />}
        loader={getMovieById}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)