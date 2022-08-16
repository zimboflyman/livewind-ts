import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppInit } from "./useAppInit";

function App() {
  const [loading, hasError, data, errorMsg] = useAppInit();
  console.log("loading :>> ", loading);
  console.log("hasError :>> ", hasError);
  console.log("data :>> ", data);
  console.log("errorMsg :>> ", errorMsg);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
