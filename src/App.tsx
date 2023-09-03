import React from "react";
import "./App.css";
import Counter from './components/counter/counter'
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <Home/>
    </div>
  );
}

export default App;
