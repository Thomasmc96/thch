import React, { useEffect } from "react";
import Header from "../header/Header";
import "./NotFound.css";
import toucan from "../../assets/img/toucanKingDead.png";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | thch";
  });

  return (
    <React.Fragment>
      <Header title="404" />
      <div className="container notFound">
        <section>
          <h1>Woops, looks like I took you a wrong direction</h1>
          <img src={toucan} alt="Toucan" />
        </section>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
