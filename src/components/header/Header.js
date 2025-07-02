import "./Header.css";
import ProgressiveImg from "../utilities/ProgressiveImg";
import { Link } from "react-router-dom";

const Header = ({ background, backgroundPlaceholder, title }) => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <header className="header">
      <div className="headerBackground">
        <ProgressiveImg
          src={background}
          placeholderSrc={backgroundPlaceholder}
          alt="Header background"
          width="1920px"
          height="1080px"
          className="headerImg"
        />
        <div className="headerTitle">
          {title}{" "}
          {/* {icon && (
            <img src={icon} alt="Title icon" className="icon" />
          )} */}
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
