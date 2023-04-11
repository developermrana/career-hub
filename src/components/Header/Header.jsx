import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const Header = () => {
  return (
    <header className="bg-[#E8E8E8]">
      <Navbar />
      <HeroSection />
    </header>
  );
};

export default Header;
