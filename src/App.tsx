import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppInit } from "./useAppInit";
import { LiveWind } from "./components/LiveWind";

// interface data {
//   name?: string;
// }

function App() {
  const [isLoading, hasError, data, errorMsg] = useAppInit();
  console.log("loading :>> ", isLoading);
  console.log("hasError :>> ", hasError);
  console.log("data :>> ", data);
  console.log("errorMsg :>> ", errorMsg);

  if (hasError) {
    return (
      <>
        <div>Something went wrong ...</div>
      </>
    );
  } else if (isLoading) {
    return (
      <>
        <div>Loading ...</div>
      </>
    );
  } else if (!hasError && !isLoading && data) {
    return (
      <>
        <div className="App">
          <h2>{data.name}</h2>
          <h2>{data.country}</h2>

          <h2>some magic happens !</h2>
          <LiveWind data={data} />
          {/* <LiveWind /> */}
        </div>
      </>
    );
  }

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
