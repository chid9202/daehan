import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header";
import Header from "components/Header";
import AboutMe from "components/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content"></div>
      <AboutMe />
    </div>
  );
}

export default App;
