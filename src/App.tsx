import React from "react";
import "./App.css";
import Counter from './components/counter/counter'
import { ThemeProvider } from "@mui/material";
import theme from './styles/styles'
import MovieListPage from "./components/movieList/movieListPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Counter initialValue={0} /> */}
        <MovieListPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
