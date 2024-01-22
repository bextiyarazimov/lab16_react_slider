import React from "react";
import Slider from "../../Components/Slider/Slider";
import { images } from "../../Data/Slider_data";
const Home = (props) => {


  
  return( 
  
  <Slider data={images}/>);
};

export default Home;
