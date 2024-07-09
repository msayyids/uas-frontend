import { useContext, useEffect } from "react";
import { CovidContext } from "../Context/context";
import endpoint from "../utils/constants/endpoint";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import IndonesiaCase from "../components/Indonesia/IndonesiaCase";
import Tabless from "../components/Table/table";

const IndonesiaPage = () => {
  const { setIndonesiaData, setProvinsiData, provinsiData } = useContext(CovidContext);

  useEffect(() => {
    fectIndoesiacase();
  }, []);

  const fectIndoesiacase = async () => {
    const url = endpoint.nasional;
    const response = await axios(url);
    setIndonesiaData(response.data.indonesia);
    setProvinsiData(response.data.regions);
  };

  return (
    <>
      <Hero />
      <IndonesiaCase />
      <Tabless data={provinsiData} title="Situation by Provinces" subtitle="Data Indonesia Berdasarkan Provinsi" />
    </>
  );
};

export default IndonesiaPage;
