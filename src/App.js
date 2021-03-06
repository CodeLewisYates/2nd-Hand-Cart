import React from "react";
import "./Sass/main.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
};

export default App;
