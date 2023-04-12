import React from "react";
import Button from "../Button/Button";
import hero from "../../../public/assets/All Images/heroimg.png";

const HeroSection = () => {
  return (
    <div className="bg-[#E8E8E8] ">
      <div className="My-Container  md:flex justify-between items-center ">
        <div className="header-text max-w-lg">
          <h1 className="text-4xl md:text-7xl fw800 ">
            One Step Closer To Your{" "}
            <span className="text-[#9774FF] ">Dream Job</span>
          </h1>
          <p className="py-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="header-img">
          <img src={hero} className="w-full h-full" alt="Hero Images" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
