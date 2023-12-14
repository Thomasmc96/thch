import React, { useEffect } from "react";
import Header from "../../header/Header";
import backgroundPc from "../../../assets/img/backgrounds/background_sunrise_pc.jpg";
import backgroundMobile from "../../../assets/img/backgrounds/background_sunrise_mobile.jpg";

const Craftd = () => {
  useEffect(() => {
    document.title = "Craftd | ";
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
      <Header title="Craftd" background={background} />
      <div>Craftd</div>
    </React.Fragment>
  );
};

export default Craftd;
