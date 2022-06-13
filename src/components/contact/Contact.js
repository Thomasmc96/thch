import React, { useEffect } from "react";
import Header from "../header/Header";
import "./Contact.css";
import icon from "../../assets/img/icons/contact-white.svg";
import backgroundPc from "../../assets/img/backgrounds/background_sunset_pc.jpg";
import backgroundMobile from "../../assets/img/backgrounds/background_sunset_mobile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  // Get window width
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Set header background
  const background = width > 1000 ? backgroundPc : backgroundMobile;

  // useEffect hook that fires when component has mounted
  useEffect(() => {
    document.title = "Contact | TechThomas";
  })

  return (
    <React.Fragment>
      <Header title="Contact" icon={icon} background={background} />
      <div className="container contact">
        <h1>Let me hear from you!</h1>
        <h2>
          <a href="mailto:tc@techthomas.dk" className="mail">
            tc@techthomas.dk
          </a>
        </h2>
        <div className="icons">
          <a
            href="https://github.com/thom9521"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-m-c/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </a>
          <a href="mailto:tc@techthomas.dk">
            <FontAwesomeIcon icon={faEnvelope} className="icon envelope" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
