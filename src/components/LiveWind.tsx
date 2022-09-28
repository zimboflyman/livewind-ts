import ReactECharts from "echarts-for-react";

export const LiveWind = ({ last24HrData }: any) => {
  type graphDataType = {
    $: number; //time in minutes//
    D: string; // direction//
    Dp: number; //Dew Point
    G: number; //Wind Gust in mph//
    H: number; //Screen Relative Humidity
    P: number; // Pressure - hpa
    Pt: string; //Pressure Tendency - Pa/s
    S: number; //wind speed in mph//
    T: number; //Temp - celsius//
    V: number; //Visibility
    W: number; //Weather Type
  };

  // type simpleDataType = {
  //   windSpeed: string;
  //   gust: string;
  //   direction: string;
  //   temp: number;
  //   time: number;
  // };

  type simpleDataType = {
    time: number;
    windSpeed: string;
    R: string;
    waveHeight: number;
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
      time: item.$ / 60,
      windSpeed: (item.S / 1.15078).toFixed(1),
      R: item.D,
      waveHeight: item.T,
      // gust: (item.G / 1.15078).toFixed(1),
    }));
    console.log("simple Data >>", simpleData);

    latestReading.push(simpleData[simpleData.length - 1]);
    console.log("latestReading :>> ", latestReading);

    // const directionMap = {};
    // // prettier-ignore
    // ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'].forEach(function (name, index) {
    //     directionMap[name] = Math.PI / 8 * index;
    // });

    const dims = {
      time: 0,
      windSpeed: 1,
      R: 2,
      waveHeight: 3,
    };
    // const arrowSize = 18;

    // const renderArrow = function (param, api) {
    //   const point = api.coord([
    //     api.value(dims.time),
    //     api.value(dims.windSpeed),
    //   ]);
    //   return {
    //     type: "path",
    //     shape: {
    //       pathData: "M31 16l-15-15v9h-26v12h26v9z",
    //       x: -arrowSize / 2,
    //       y: -arrowSize / 2,
    //       width: arrowSize,
    //       height: arrowSize,
    //     },
    //     rotation: directionMap[api.value(dims.R)],
    //     position: point,
    //     style: api.style({
    //       stroke: "#555",
    //       lineWidth: 1,
    //     }),
    //   };
    // };

    const options = {
      title: {
        text: "wind chart",
        subtext: "www.seabreeze.com.au",
        left: "center",
      },
      // tooltip: {
      //   trigger: "axis",
      //   formatter: function (params) {
      //     return [
      //       echarts.format.formatTime(
      //         "yyyy-MM-dd",
      //         params[0].value[dims.time]
      //       ) +
      //         " " +
      //         echarts.format.formatTime("hh:mm", params[0].value[dims.time]),
      //       "风速：" + params[0].value[dims.windSpeed],
      //       "风向：" + params[0].value[dims.R],
      //       "浪高：" + params[0].value[dims.waveHeight],
      //     ].join("<br>");
      //   },
      // },
      grid: {
        top: 160,
        bottom: 125,
      },
      xAxis: {
        type: "time",
        maxInterval: 3600 * 1000 * 24,
        splitLine: {
          lineStyle: {
            color: "#ddd",
          },
        },
      },
      yAxis: [
        {
          name: "Wind",
          nameLocation: "middle",
          nameGap: 35,
          axisLine: {
            lineStyle: {
              color: "#666",
            },
          },
          splitLine: {
            lineStyle: {
              color: "#ddd",
            },
          },
        },
        {
          name: "Wind",
          nameLocation: "middle",
          nameGap: 35,
          max: 6,
          axisLine: {
            lineStyle: {
              color: "#015DD5",
            },
          },
          splitLine: { show: false },
        },
        {
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false },
        },
      ],
      // visualMap: {
      //   type: "piecewise",
      //   // show: false,
      //   orient: "horizontal",
      //   left: "center",
      //   bottom: 10,
      //   pieces: [
      //     {
      //       gte: 17,
      //       color: "#18BF12",
      //       label: "大风（>=17节）",
      //     },
      //     {
      //       gte: 11,
      //       lt: 17,
      //       color: "#f4e9a3",
      //       label: "中风（11  ~ 17 节）",
      //     },
      //     {
      //       lt: 11,
      //       color: "#D33C3E",
      //       label: "微风（小于 11 节）",
      //     },
      //   ],
      //   seriesIndex: 1,
      //   dimension: 1,
      // },
      // dataZoom: [
      //   {
      //     type: "inside",
      //     xAxisIndex: 0,
      //     minSpan: 5,
      //   },
      //   {
      //     type: "slider",
      //     xAxisIndex: 0,
      //     minSpan: 5,
      //     bottom: 50,
      //   },
      // ],
      series: [
        {
          type: "line",
          yAxisIndex: 1,
          showSymbol: false,
          emphasis: {
            scale: false,
          },
          symbolSize: 10,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(88,160,253,1)",
                },
                {
                  offset: 0.5,
                  color: "rgba(88,160,253,0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(88,160,253,0)",
                },
              ],
            },
          },
          lineStyle: {
            color: "rgba(88,160,253,1)",
          },
          itemStyle: {
            color: "rgba(88,160,253,1)",
          },
          encode: {
            x: dims.time,
            y: dims.waveHeight,
          },
          data: simpleData,
          z: 2,
        },
        // {
        //   type: "custom",
        //   renderItem: renderArrow,
        //   encode: {
        //     x: dims.time,
        //     y: dims.windSpeed,
        //   },
        //   data: data,
        //   z: 10,
        // },
        {
          type: "line",
          symbol: "none",
          encode: {
            x: dims.time,
            y: dims.windSpeed,
          },
          lineStyle: {
            color: "#aaa",
            type: "dotted",
          },
          data: simpleData,
          z: 1,
        },
      ],
    };

    return (
      <>
        <ReactECharts option={options} />
      </>
    );
  } else {
    //use error component / boundary
    return <h5>'error'</h5>;
  }
};

// export default LiveWind;
