import React from "react";
import "./App.css";
import Counter from './components/counter/counter'
import Home from "./components/Home/home";
import { ThemeProvider } from "@mui/material";
import theme from './styles/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Counter initialValue={0} />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
