import React from "react";
import Header from "../header/Header";
import "./NotFound.css";
import toucan from "../../assets/img/toucanKingDead.png";

const NotFound = () => {
  return (
    <React.Fragment>
      <Header title="404" />
      <div className="container notFound">
        <section>
          <h1>Woops, looks like we took you a wrong direction</h1>
          <img src={toucan} alt="Toucan" />
        </section>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
