import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import JobCategory from "./components/JobCategory/JobCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionTitle title="Job Category List" />
      <JobCategory />
      <SectionTitle title="Featured Jobs" />
    </div>
  );
}

export default App;
