import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import SectionTitle from "../SectionTitle/SectionTitle";
import JobCategory from "../JobCategory/JobCategory";
import Features from "../Features/Features";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SectionTitle title="Job Category List"></SectionTitle>
      <JobCategory />
      <SectionTitle title="Featured Jobs"></SectionTitle>
      <Features />
      <div className="text-center py-5">
        <Button>See More</Button>
      </div>
    </div>
  );
};

export default Home;
