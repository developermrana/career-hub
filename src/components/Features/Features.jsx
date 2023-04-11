import React, { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("jobFeature.json")
      .then((res) => res.json())
      .then((features) => setFeatures(features));
  }, []);
  return (
    <section className="My-Container grid md:grid-cols-2 gap-10">
      {features.map((feature) => (
        <Feature feature={feature} key={feature.id} />
      ))}
    </section>
  );
};

export default Features;
