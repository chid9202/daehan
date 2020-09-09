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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
