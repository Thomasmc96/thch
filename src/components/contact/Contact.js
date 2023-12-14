import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import "./Contact.css";
import icon from "../../assets/img/icons/contact-white.svg";
import backgroundPc from "../../assets/img/backgrounds/background_sunset_pc.jpg";
import backgroundMobile from "../../assets/img/backgrounds/background_sunset_mobile.jpg";
import backgroundPcPlaceholder from "../../assets/img/backgrounds/background_sunset_pc_placeholder.jpg";
import backgroundMobilePlaceholder from "../../assets/img/backgrounds/background_sunset_mobile_placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const mail = "mail@thch.dk";

  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Get window width
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Set header background
  const background = width > 1000 ? backgroundPc : backgroundMobile;
  const backgroundPlaceholder =
    width > 1000 ? backgroundPcPlaceholder : backgroundMobilePlaceholder;

  // useEffect hook that fires when component has mounted
  useEffect(() => {
    document.title = "Contact | thch";
  });

  // Show easter egg function
  const handleEasterEgg = () => setShowEasterEgg(true);

  return (
    <React.Fragment>
      <Header
        title="Contact"
        icon={icon}
        background={background}
        backgroundPlaceholder={backgroundPlaceholder}
      />
      <div className="container contact">
        <h1>
          Let me hear from you<span onClick={handleEasterEgg}>!</span>{" "}
          {showEasterEgg && (
            <span role="img" aria-label="emoji">
              🦃
            </span>
          )}
        </h1>
        <h2>
          <a href={"mailto:" + mail} className="mail">
            {mail}
          </a>
        </h2>
        <div className="icons">
          <a
            href="https://github.com/Thomasmc96"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-m-c/"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </a>
          <a href={"mailto:" + mail} className="iconLink">
            <FontAwesomeIcon icon={faEnvelope} className="icon envelope" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
