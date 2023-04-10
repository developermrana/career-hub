import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="bg-[#E8E8E8]">
      <div className="My-Container">
        <div className="navbar py-4  md:flex justify-between items-center">
          <div className="logo">
            <h2 className="text-3xl fw700">Search Job</h2>
          </div>
          <nav>
            <ul className="md:flex gap-4 ">
              <li className="fw500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="fw500">
                <NavLink to="/static">Statistics</NavLink>
              </li>
              <li className="fw500">
                <NavLink to="/applied">Applied</NavLink>
              </li>
              <li className="fw500">
                <NavLink to="/blog">Blog </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <Button>Star Applying</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
