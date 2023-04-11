import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="md:text-center px-3 pt-14 pb-8">
      <h2 className="text-3xl fw700">{title}</h2>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  );
};

export default SectionTitle;
