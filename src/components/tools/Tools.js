import React, { useEffect } from "react";
import Header from "../header/Header";
import "./Tools.css";
import icon from "../../assets/img/icons/tools-white.svg";
import backgroundPc from "../../assets/img/backgrounds/background_sunrise_pc.jpg";
import backgroundMobile from "../../assets/img/backgrounds/background_sunrise_mobile.jpg";
import backgroundPcPlaceholder from "../../assets/img/backgrounds/background_sunrise_pc_placeholder.jpg";
import backgroundMobilePlaceholder from "../../assets/img/backgrounds/background_sunrise_mobile_placeholder.jpg";

const Tools = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const background = width > 1000 ? backgroundPc : backgroundMobile;
  const backgroundPlaceholder =
    width > 1000 ? backgroundPcPlaceholder : backgroundMobilePlaceholder;

  useEffect(() => {
    document.title = "Tools | thch";
  }, []);

  return (
    <React.Fragment>
      <Header
        title="Tools"
        icon={icon}
        background={background}
        backgroundPlaceholder={backgroundPlaceholder}
      />
      <section className="container tools">
        <h1>These are my most used tools</h1>
        <div className="toolsSections">
          <section>
            <h2>Frontend</h2>
            <div className="badges">
              <span className="badge html5">HTML5</span>
              <span className="badge css3">CSS3</span>
              <span className="badge javascript">JavaScript</span>
              <span className="badge react">React</span>
              <span className="badge reactNative">React Native</span>
              <span className="badge vue">Vue</span>
            </div>
          </section>
          <section className="backend">
            <h2>Backend</h2>
            <div className="badges">
              <span className="badge php">PHP</span>
              <span className="badge nodejs">Nodejs</span>
              <span className="badge mysql">MySQL</span>
              <span className="badge mongodb">MongoDB</span>
              <span className="badge api">RESTful API</span>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tools;
