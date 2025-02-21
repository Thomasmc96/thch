import React, { useEffect } from "react";
import Header from "../header/Header";
import ProgressiveImg from "../utilities/ProgressiveImg";
import "./Home.css";
import me from "../../assets/img/me.jpg";
import mePlaceholder from "../../assets/img/mePlaceholder.jpg";
import icon from "../../assets/img/icons/home-white.svg";
import backgroundPc from "../../assets/img/backgrounds/background_night_pc.jpg";
import backgroundMobile from "../../assets/img/backgrounds/background_night_mobile.jpg";
import backgroundPcPlaceholder from "../../assets/img/backgrounds/background_night_pc_placeholder.jpg";
import backgroundMobilePlaceholder from "../../assets/img/backgrounds/background_night_mobile_placeholder.jpg";

const Home = () => {
  const myBirthDate = new Date(1996, 5, 4); // Month needs to be -1
  const diff = Date.now() - myBirthDate.getTime();
  const diffAsDate = new Date(diff);
  const myAge = Math.abs(diffAsDate.getUTCFullYear() - 1970);

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const background = width > 1000 ? backgroundPc : backgroundMobile;
  const backgroundPlaceholder =
    width > 1000 ? backgroundPcPlaceholder : backgroundMobilePlaceholder;

  useEffect(() => {
    document.title = "Home | thch";
  });

  return (
    <>
      <Header
        title="Home"
        icon={icon}
        background={background}
        backgroundPlaceholder={backgroundPlaceholder}
      />
      <div className="container home">
        <div className="info">
          <div className="text">
            <p>
              Hello👋 My name is Thomas, and this website is a glimpse into who
              I am, what I do, and what I've accomplished. Feel free to explore
              - I hope something catches your interest!
            </p>
            <p>
              So, who am I? I'm a {myAge}-year-old full-stack web developer
              based in Køge, Denmark. When I'm not coding, you'll find me
              spending time on my{" "}
              <GoToLink url={"https://frydenlund.thch.dk"}>farm</GoToLink> where
              I live with my{" "}
              <GoToLink url={"https://dittelh.dk"}>fiancée</GoToLink>, two dogs
              and two cats. I also enjoy watching sports and playing video games
              👾
            </p>
            <p>As a person, I'm calm, ambitious, and positive.</p>
          </div>
          <div className="img">
            <ProgressiveImg
              src={me}
              placeholderSrc={mePlaceholder}
              alt="Me"
              width="556px"
              height="646px"
              className="me"
            />
            <p>And here I am</p>
          </div>
        </div>
      </div>
    </>
  );
};

const GoToLink = ({ url, children }) => {
  return (
    <a
      className="aLink"
      href={url}
      target="_blank"
      title="Check it out!"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Home;
