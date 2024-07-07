import { createContext, useState } from "react";

const CovidContext = createContext({
  globalData: [],
  regionalData: [],
  indonesiaData: [],
  provinsiData:[],
  provinsiLocalData:[],
  setGlobalData: () => {},
  setRegionalData: () => {},
  setIndonesiaData: () => {},
  setProvinsiData: ()=>{},
  setProvinsiLocalData: ()=>{},
});

const CovidProvider = ({ children }) => {
  const [covidData, setCovidData] = useState({
    globalData: [],
    regionalData: [],
    indonesiaData: [],
    provinsiData:[],
    provinsiLocalData:[],
  });

  // Setter functions
  const setGlobalData = (data) => {
    setCovidData((prevData) => ({
      ...prevData,
      globalData: data,
    }));
  };

  const setRegionalData = (data) => {
    setCovidData((prevData) => ({
      ...prevData,
      regionalData: data,
    }));
  };

  const setIndonesiaData = (data) => {
    setCovidData((prevData) => ({
      ...prevData,
      indonesiaData: data,
    }));
  };

  const setProvinsiData = (data) => {
    setCovidData((prevData) => ({
      ...prevData,
      provinsiData: data,
    }));
  };

  const setProvinsiLocalData = (data) => {
    setCovidData((prevData) => ({
      ...prevData,
      provinsiLocalData: data,
    }));
  };

  // Nilai yang  disediakan oleh provider
  const contextValue = {
    globalData: covidData.globalData,
    regionalData: covidData.regionalData,
    indonesiaData: covidData.indonesiaData,
    provinsiData:covidData.provinsiData,
    provinsiLocalData:covidData.provinsiLocalData,
    setGlobalData,
    setRegionalData,
    setIndonesiaData,
    setProvinsiData,
    setProvinsiLocalData,
  };

  return (
    <CovidContext.Provider value={contextValue}>
      {children}
    </CovidContext.Provider>
  );
};

export { CovidContext, CovidProvider };
