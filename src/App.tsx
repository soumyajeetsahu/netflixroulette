import React from "react";
import "./App.css";
import Counter from './components/counter/counter'
import { ThemeProvider } from "@mui/material";
import theme from './styles/styles'
import MovieListPage from "./components/movieList/movieListPage";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
