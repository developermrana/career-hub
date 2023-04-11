import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  const { id, logo, title, company, category1, category2, salary, location } =
    feature;
  return (
    <div className="space-y-4 border border-current p-8 rounded-lg">
      <img src={logo} alt="company logo" />
      <h3 className="text-2xl">{title}</h3>
      <h4 className="text-xl">{company}</h4>
      <div className="flex gap-3">
        <button className="btn">{category1}</button>
        <button className="btn">{category2}</button>
      </div>
      <div className="flex gap-10">
        <p>{location}</p>
        <p>Salary : {salary}</p>
      </div>

      <Link to="/details">
        <Button>View Details</Button>
      </Link>
    </div>
  );
};

export default Feature;
