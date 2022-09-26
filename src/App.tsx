import "./App.css";
import { useAppInit } from "./useAppInit";
import Header from "./components/header";
import { ErrorContainer } from "./components/Toolkit";
import { LiveWind } from "./components/LiveWind";

// interface data {
//   name?: string;
// }

const App = () => {
  const [isLoading, hasError, data, errorMsg] = useAppInit();

  return (
    <>
      <div className="App">
        <Header
        // style={{ width: "100vw", height: "10vh" }}
        />
        {isLoading || hasError ? (
          <ErrorContainer className="text-warning justify-content-center">
            {isLoading && <div>Loading...</div>}
            {hasError && <div>{`hasError!!! - ${errorMsg}`}</div>}
          </ErrorContainer>
        ) : (
          ""
        )}
        {!hasError && !isLoading && data && (
          <>
            {/* // todo - display the day and date */}
            <h2>{data.name}</h2>
            <h2>{data.country}</h2>
            <h2>some magic happens !</h2>
            <LiveWind data={data} />
            {/* <LiveWind /> */}
          </>
        )}
      </div>
    </>
  );
};

export default App;
