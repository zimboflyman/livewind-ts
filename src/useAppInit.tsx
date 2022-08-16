import { useState, useEffect } from "react";

const fob = process.env.REACT_APP_METOFFIC_KEY;

console.log("fob :>> ", fob);
const windUrl =
  // sitelist
  // `http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/sitelist?&key=${fob}`

  // Mumbles
  // `http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/03609?res=hourly&key=${fob}`
  // `https://cors-anywhere.herokuapp.com/http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/03609?res=hourly&key=${fob}`

  // Pembrey
  `http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/json/03605?res=hourly&key=${fob}`;

export const useAppInit = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // const [data, setData] = useState({ name: "Pembrey!!!" });
  const [data, setData] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const getMetOfficeData = async () => {
      try {
        const response = await fetch(windUrl);
        console.log("response Status = ", response.status);
        if (!response.ok) {
          setHasError(true);
          setIsLoading(false);
          // todo setErrorBoundary
          // throw Error(response.status);
        } else {
          // let siteData;
          setIsLoading(false);
          const json = await response.json();

          if ("Location" in json.SiteRep.DV) {
            // siteData = json.SiteRep.DV.Location;
            setData(json.SiteRep.DV.Location);
            setHasError(false);
          } else {
            setHasError(true);
            // todo setErrorBoundary
          }
        }
      } catch (error) {
        // todo setErrorBoundary
        console.log("error :>> ", error);
        if (error instanceof Error) {
          // ✅ TypeScript knows err is Error
          setErrorMsg(error.message);
        } else {
          setErrorMsg("Error getting data from the metOffice!");
        }
        setIsLoading(false);
        setHasError(true);
      }
    };
    getMetOfficeData();
  }, []);
  // }, [setIsLoading, setHasError, setData, hasError]);

  // console.log("data.name :>> ", data.name);

  return [isLoading, hasError, data, errorMsg] as const;
};
