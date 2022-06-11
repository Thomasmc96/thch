import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="headerTitle">
        {props.title}{" "}
        <span role="img" aria-label="emoji">
          {props.emoji}
        </span>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/tools"}>Tools</Link>
          </li>
          <li>
            <Link to={"/experience"}>Experience</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
