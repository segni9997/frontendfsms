import React from "react";
import "../../assets/css/style.css";

const TimeOut = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="text-center">
          <h1 className=" text-6xl text-orange-600 font-bold ">
            <span className="time">Time</span>
            <span>Out</span>
          </h1>
          <h4 className="text-4xl mt-8 text-white">
            please check your Connection and try again
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TimeOut;
