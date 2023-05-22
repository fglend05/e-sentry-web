import React from "react";
import CarouselComponent from "./Components/Carousel";
import { Carousel } from "react-responsive-carousel";

const Overview = () => {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselComponent title="Temperature" />
        <CarouselComponent title="Temperature" />
      </Carousel>
    </div>
  );
};

export default Overview;
