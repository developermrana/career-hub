import React from "react";

const Button = ({ children }) => {
  return (
    <button className=" bg-[#9774FF] py-2 px-3 rounded-lg  text-[#fff] fw-semibold">
      {children}
    </button>
  );
};

export default Button;
