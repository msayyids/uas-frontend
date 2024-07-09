import { useContext, useEffect } from "react";
import Forms from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import { CovidContext } from "../Context/context";
import data from "../utils/constants/provinces";
import Tabless from "../components/Table/table";

const IndonesiaLocalPage = () => {
  const { setProvinsiLocalData, provinsiLocalData } = useContext(CovidContext);

  useEffect(() => {
    setProvinsiLocalData(data.provinces)
  }, []);

  return (
    <>
      <Hero />
      <Tabless data={provinsiLocalData} title="Provinsi" subtitle="Data covid berdasarkan provinsi" />
      <Forms />
    </>
  );
};

export default IndonesiaLocalPage;
