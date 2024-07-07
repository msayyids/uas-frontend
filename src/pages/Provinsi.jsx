import { useContext, useEffect } from "react";
import Forms from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import { CovidContext } from "../Context/context";
import data from "../utils/constants/provinces";
import ProvinceLocalCase from "../components/ProvinsiLocalData/ProvinceLocalCase";

const IndonesiaLocalPage = () => {
  const { setProvinsiLocalData } = useContext(CovidContext);

  useEffect(() => {
    setProvinsiLocalData(data.provinces)
  }, []);

  return (
    <>
      <Hero />
      <ProvinceLocalCase/>
      <Forms />
    </>
  );
};

export default IndonesiaLocalPage;
