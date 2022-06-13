import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  // Scroll to top of page
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <header>
      {/* Header backgrounds by Ditte Lykke Hansen @devditte.dk */}
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
            <Link to={"/"} onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/tools"} onClick={scrollToTop}>
              Tools
            </Link>
          </li>
          <li>
            <Link to={"/experience"} onClick={scrollToTop}>
              Experience
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
