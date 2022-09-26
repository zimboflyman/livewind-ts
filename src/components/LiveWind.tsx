export const LiveWind = ({ data }: any) => {
  const { Period } = data;
  let dataYesterday: any[];
  let dataToday: any[];
  let graphData: any[];

  console.log("data:>> ", data);
  console.log("Period :>> ", Period);

  if (!Period) {
    dataYesterday = [];
    // ??????
    dataToday = [];
    graphData = dataYesterday?.concat(dataToday);
  } else if (Period.length === 2) {
    // we have both yesterday and todays data
    dataYesterday = Period[0].Rep;
    console.log("dataYesterday", dataYesterday);
    // var dataYesterdayArray = Object.keys(dataYesterday).map((key) => {
    // 	return dataYesterday[key];
    // });
    dataToday = Period[1].Rep;
    console.log("dataToday", dataToday);
    graphData = dataYesterday?.concat(dataToday);
    console.log("graphData :>> ", graphData);
  } else if (Period.length === 1) {
    dataYesterday = [];
    dataToday = Period[0].Rep;
    console.log(
      "todays data is unusual in that it containes only 1 array and no info for yesterday"
    );
  }
  // else {
  //   console.log("Data received from the Metoffice is stale!!!");
  //   graphData = data.Rep;
  // }

  // console.log("graphData :>> ", graphData);

  return <h5>LiveWInd component</h5>;
};

// export default LiveWind;
