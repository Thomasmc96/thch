import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import background from "../../assets/img/backgrounds/background_blue6.jpg";

const Header = (props) => {
  return (
    <header
      className="header"
      style={{ backgroundImage: "url(" + background + ")" }}
    >
      <div className="headerTitle">
        {props.title}{" "}
        {props.icon && (
          <img src={props.icon} alt="Title icon" className="icon" />
        )}
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
