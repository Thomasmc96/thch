import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div
        className="headerImg"
        style={{ backgroundImage: "url(" + props.background + ")" }}
      >
        <div className="headerTitle">
          {props.title}{" "}
          {props.icon && (
            <img src={props.icon} alt="Title icon" className="icon" />
          )}
        </div>
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
