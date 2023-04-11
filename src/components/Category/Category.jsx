import React from "react";

const Category = ({ data }) => {
  const { img, id, category, quantity } = data;
  return (
    <div className="p-4 bg-[#E8E8E8] rounded-md space-y-5">
      <img src={img} alt="" />
      <h3 className="text-2xl">{category}</h3>
      <p>
        {quantity} <span>+ Jobs Available</span>
      </p>
    </div>
  );
};

export default Category;
