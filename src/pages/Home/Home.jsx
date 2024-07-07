import { useContext, useEffect} from "react";
import axios from "axios";
import AllCase from "../../components/AllCase/allCase";
import Hero from "../../components/Hero/Hero";
import endpoint from "../../utils/constants/endpoint";
import RegionCase from "../../components/RegionCase/regionCase";
import {CovidContext} from "../../Context/context";

const HomePage = () => {

  const {setGlobalData,setRegionalData} = useContext(CovidContext)

  useEffect(() => {
    fetchGlobalCase();
  }, []);

  const fetchGlobalCase = async () => {
      const url = endpoint.global;
      const response = await axios(url);
      setGlobalData(response.data.global);
      setRegionalData(response.data.regions);
  };

  return (
    <>
      <Hero />
      <AllCase/>
      <RegionCase/>
    </>
  );
};

export default HomePage;
