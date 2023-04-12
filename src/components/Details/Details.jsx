import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const {
    id,
    description,
    responsibility,
    education,
    experience,
    salary,
    title,
    phone,
    email,
    location,
  } = data;
  return (
    <section>
      <h1 className="text-center text-3xl py-14 md:py-28 bg-[#E8E8E8] fw700">
        Details
      </h1>
      <div className="My-Container py-14 flex gap-10">
        <div className="space-y-5 basis-3/4">
          <p>
            <span className="fw700">Job Description : </span>
            {description}
          </p>
          <p>
            <span className="fw700">Job Description : </span>
            {responsibility}
          </p>
          <p>
            <span className="fw700">Job Description : </span>
            {education}
          </p>
          <p>
            <span className="fw700">Job Description : </span>
            {experience}
          </p>
        </div>
        <div className="basis-1/4 bg-[#E8E8E8] p-5 space-y-6">
          <h2 className="text-xl fw700 divide-x-4 divide-orange divide-solid ">
            Job Details
          </h2>
          <p>
            <span className="fw700">Salary :</span> {salary} (Per Month)
          </p>
          <p>
            <span className="fw700">Job Title :</span> {title}
          </p>
          <h2 className="text-xl fw700 divide-x-4 divide-orange divide-solid ">
            Contact Information
          </h2>
          <p>
            <span className="fw700">Phone :</span> {phone}
          </p>
          <p>
            <span className="fw700">Email :</span> {email}
          </p>
          <p>
            <span className="fw700">Address :</span> {location}
          </p>
          <Link to="/applied">
            <button className="block py-4 bg-[#828CFE] w-full text-white fw800 rounded">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
