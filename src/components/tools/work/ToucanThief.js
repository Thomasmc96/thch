import React, { useEffect } from "react";
import Header from "../../header/Header";
import backgroundPc from "../../../assets/img/backgrounds/background_sunrise_pc.jpg";
import backgroundMobile from "../../../assets/img/backgrounds/background_sunrise_mobile.jpg";

const ToucanThief = () => {
  useEffect(() => {
    document.title = "Toucan Thief | thch";
  });

  // Get window width
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Set header background
  const background = width > 1000 ? backgroundPc : backgroundMobile;
  return (
    <React.Fragment>
      <Header title="Toucan Thief" background={background} />
      <div>ToucanThief</div>
    </React.Fragment>
  );
};

export default ToucanThief;
