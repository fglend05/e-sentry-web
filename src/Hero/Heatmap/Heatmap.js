import React, { useEffect, useState } from "react";
import axios from "axios";
const Heatmap = ({ wqi }) => {
  return (
    <div>
      <p className="font-bold">Water Quality</p>
      <p>{wqi}</p>
    </div>
  );
};

export default Heatmap;
