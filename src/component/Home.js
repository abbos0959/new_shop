import React from "react";
import img from "../assets/kosty.jpg";

export const Home = () => {
  return (
    <div className="home">
      <img className="img" src={img} />
      <div className="home_text">
        <div>
            NEW SEASON ARRIVALS
        </div>
      </div>
    </div>
  );
};
