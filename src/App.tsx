import "./App.css";
import { useDataFetch } from "./useDataFetch";
import Header from "./components/header";
import { ErrorContainer } from "./components/Toolkit";
import { LiveWind } from "./components/LiveWind";

// interface data {
//   name?: string;
// }

const App = () => {
  const [isLoading, hasError, data, errorMsg] = useDataFetch();
  const { Period: last24HrData } = data;

  return (
    <>
      <div className="App">
        <Header
        // style={{ width: "100vw", height: "10vh" }}
        />
        {isLoading || hasError || !last24HrData?.length ? (
          // todo - use a single error component here
          <ErrorContainer className="text-warning justify-content-center">
            {isLoading && <div>Loading...</div>}
            {hasError && <div>{`hasError!!! - ${errorMsg}`}</div>}
            {!last24HrData?.length && <div>data.Period has no info</div>}
          </ErrorContainer>
        ) : (
          ""
        )}
        {!hasError && !isLoading && last24HrData?.length && (
          // todo - display the day and date

          <>
            <h2>{data.name}</h2>
            <h2>{data.country}</h2>
            <h2>some magic happens !</h2>
            <LiveWind last24HrData={last24HrData} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
