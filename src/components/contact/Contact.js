import React from "react";
import Header from "../header/Header";
import icon from "../../assets/img/icons/contact-white.svg";

const Contact = () => {
  return (
    <React.Fragment>
      <Header title="Contact" icon={icon} />
      <div className="container">
        <p>Contact</p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
