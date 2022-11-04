import React from "react";
import Mark from "../assets/mark.png";

const Hero = () => {
  return (
    <div className="bg-Mblack text-White w-full h-[100vh]">
      <h1 className="text-White text-8xl font-bold">
        Changing <span className="text-Mgreen">TECH </span> For The{" "}
        <span className="text-Mgreen">Masses</span>
      </h1>
      <p className="">
        Here at MAXIFTY are goal is to help fellow devlopers like our selfs to
        lunch, Test , and Depoly there ideas{" "}
      </p>
      <p className="">CLICK HERE TO MAXIFY YOUR IDEAS </p>
      <button className="">Learn More</button>
      <img className="" src={Mark} alt="#" />
    </div>
  );
};

export default Hero;
