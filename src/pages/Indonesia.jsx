import { useContext, useEffect } from "react";
import { CovidContext } from "../Context/context";
import endpoint from "../utils/constants/endpoint";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import IndonesiaCase from "../components/Indonesia/IndonesiaCase";
import ProvinceCase from "../components/Provinsi/ProvinceCase";

const IndonesiaPage = () => {
  const { setIndonesiaData, setProvinsiData } = useContext(CovidContext);

  useEffect(() => {
    fectIndoesiacase();
  }, []);

  const fectIndoesiacase = async () => {
    const url = endpoint.nasional;
    const response = await axios(url);
    setIndonesiaData(response.data.indonesia);
    setProvinsiData(response.data.regions);
    console.log(response.data.regions);
  };

  return (
    <>
      <Hero />
      <IndonesiaCase />
      <ProvinceCase/>
    </>
  );
};

export default IndonesiaPage;
