export const LiveWind = ({ last24HrData }: any) => {
  type graphDataType = {
    $: number; //time in minutes
    D: string; // direction
    Dp: number; //
    G: number; //Wind Gust in kph
    H: number;
    P: number; // Pressure
    Pt: string;
    S: number; //wind speed in kph
    T: number; //Temp
    V: number;
    W: number;
  };

  type simpleDataType = {
    windSpeed: string;
    gust: string;
    direction: string;
    temp: number;
    time: number;
  };

  // const { period } = data;
  let dataYesterday: any[];
  let dataToday: any[];

  let graphData: graphDataType[] = [];
  let simpleData: simpleDataType[] = [];
  let latestReading: simpleDataType[] = [];

  console.log("last24HrData :>> ", last24HrData);

  // concatenate yesterday and todays data into a single 24 hr array
  // if (!last24HrData) {
  // } else
  if (last24HrData?.length === 2) {
    // we have both yesterday and todays data
    dataYesterday = last24HrData[0].Rep;
    console.log("dataYesterday", dataYesterday);
    dataToday = last24HrData[1].Rep;
    console.log("dataToday", dataToday);
    graphData = dataYesterday?.concat(dataToday);
  } else if (last24HrData?.length === 1) {
    graphData = last24HrData[0].Rep;
    console.log(
      "todays data is unusual in that it containes only 1 array and no info for yesterday"
    );
  }
  // else {
  //   console.log("Data received from the Metoffice is stale!!!");  // ????
  //   graphData = data.Rep;
  // }

  console.log("graphData :>> ", graphData);

  // Convert the keys to meaningfull words, convert the units to Knots and Simplify the data and make an array with just the objects we need
  if (graphData?.length) {
    simpleData = graphData.map((item) => ({
      windSpeed: (item.S / 1.15078).toFixed(1),
      gust: (item.G / 1.15078).toFixed(1),
      direction: item.D,
      temp: item.T,
      time: item.$ / 60,
    }));
    console.log("simple Data >>", simpleData);

    latestReading.push(simpleData[simpleData.length - 1]);
    console.log("latestReading :>> ", latestReading);

    return (
      <>
        <h5>LiveWInd component</h5>
      </>
    );
  } else {
    //show error
    return <h5>'error'</h5>;
  }
};

// export default LiveWind;
