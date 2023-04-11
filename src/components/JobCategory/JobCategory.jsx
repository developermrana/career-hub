import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCategory = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <section className="My-Container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {datas.map((data) => (
        <Category data={data} key={data.id} />
      ))}
    </section>
  );
};

export default JobCategory;
