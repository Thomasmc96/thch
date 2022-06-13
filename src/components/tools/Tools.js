import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import "./Tools.css";
import icon from "../../assets/img/icons/tools-white.svg";
import backgroundPc from "../../assets/img/backgrounds/background_sunrise_pc.jpg";
import backgroundMobile from "../../assets/img/backgrounds/background_sunrise_mobile.jpg";
import toucanThiefLogo from "../../assets/img/toucanThiefLogo.png";
import traekunstLogo from "../../assets/img/traekunstLogo.png";
import craftdLogo from "../../assets/img/craftdLogo.png";

const Tools = () => {
  const [scrolled, setScrolled] = useState(false);

  // Get window width
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Set header background
  const background = width > 1000 ? backgroundPc : backgroundMobile;

  // useEffect hook that fires when component has mounted
  useEffect(() => {
    document.title = "Tools & Work | TechThomas";

    // Set scrolled
    const onScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <React.Fragment>
      <Header title="Tools & Work" icon={icon} background={background} />
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
      <section className="container work">
        <h1>Some work and projects I did</h1>
        <div className={scrolled ? "works animate" : "works"}>
          <img src={traekunstLogo} alt="Traekunst Logo" />
          <img src={craftdLogo} alt="Craftd Logo" />
          <img src={toucanThiefLogo} alt="Toucan Thief Logo" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tools;
