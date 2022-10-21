import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h2>Product list Page</h2>
      </Link>
    </div>
  );
};

export default Header;
