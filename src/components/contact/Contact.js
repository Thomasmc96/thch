import React from "react";
import Header from "../header/Header";
import "./Contact.css";
import icon from "../../assets/img/icons/contact-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <React.Fragment>
      <Header title="Contact" icon={icon} />
      <div className="container contact">
        <h1>Let me hear from you!</h1>
        <h2>
          <a href="mailto:tc@techthomas.dk" className="mail">
            tc@techthomas.dk
          </a>
        </h2>
        <div className="icons">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          <FontAwesomeIcon icon={faEnvelope} className="icon envelope" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
