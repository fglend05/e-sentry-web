import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ title }) => {
  return (
    <div className="flex items-center justify-center flex-col h-[300px] bg-wave-pattern bg-cover bg-center">
      <div className="text-center m-[20px]">
        <div className="text-xl font-bold">{title}</div>
      </div>
    </div>
  );
};

export default CarouselComponent;
