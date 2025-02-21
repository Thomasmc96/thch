import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import "./Experience.css";
import icon from "../../assets/img/icons/experience-white.svg";
import icon2 from "../../assets/img/icons/school-white.svg";
import backgroundPc from "../../assets/img/backgrounds/background_day_pc.jpg";
import backgroundMobile from "../../assets/img/backgrounds/background_day_mobile.jpg";
import backgroundPcPlaceholder from "../../assets/img/backgrounds/background_day_pc_placeholder.jpg";
import backgroundMobilePlaceholder from "../../assets/img/backgrounds/background_day_mobile_placeholder.jpg";
import hiperBrand from "../../assets/img/hiper.png";
import talesBrand from "../../assets/img/tales.jpg";
import holder100Brand from "../../assets/img/holder100.jpg";
import supeoBrand from "../../assets/img/supeo.jpg";
import zealandBrand from "../../assets/img/zealand.jpg";
import jobs from "./data/jobs.json";
import studies from "./data/studies.json";

const Experience = () => {
  const [showSchool, setShowSchool] = useState(false);

  const handleShowSchool = () => setShowSchool(!showSchool);

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const background = width > 1000 ? backgroundPc : backgroundMobile;
  const backgroundPlaceholder =
    width > 1000 ? backgroundPcPlaceholder : backgroundMobilePlaceholder;

  useEffect(() => {
    document.title = "Experience | thch";
  });

  return (
    <>
      <Header
        title="Experience"
        icon={icon}
        background={background}
        backgroundPlaceholder={backgroundPlaceholder}
      />
      <div className="switchBox">
        <img src={icon} alt="Work Icon" className="icon workIcon" />
        <label className="switch">
          <input
            type="checkbox"
            name="switch"
            onChange={handleShowSchool}
            checked={showSchool}
          />
          <span className="slider round"></span>
        </label>
        <img src={icon2} alt="School Icon" className="icon" />
      </div>
      <div className="container experience">
        {!showSchool && (
          <>
            {jobs.map((job, i) => (
              <Section
                key={i}
                slug={job.slug}
                image={job.image}
                title={job.title}
                href={job.href}
                company={job.company}
                period={job.period}
                description={job.description}
                grade={job.grade}
              />
            ))}
          </>
        )}
        {showSchool && (
          <>
            {studies.map((job, i) => (
              <Section
                key={i}
                slug={job.slug}
                image={job.image}
                title={job.title}
                href={job.href}
                company={job.company}
                period={job.period}
                description={job.description}
                grade={job.grade}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

const Section = ({
  slug,
  image,
  title,
  href,
  company,
  period,
  description,
  grade,
}) => {
  const imageMap = {
    hiperBrand,
    talesBrand,
    holder100Brand,
    supeoBrand,
    zealandBrand,
  };

  return (
    <section className={slug}>
      <img src={imageMap[image]} alt={company} />
      <div>
        <h2>{title}</h2>
        <p>
          <a href={href} target="_blank" rel="noreferrer">
            @{company}
          </a>
        </p>
        <i>{period}</i>
        {description && <p className="description">{description}</p>}
        {grade && (
          <i>
            Average grade: <b>{grade}</b>
          </i>
        )}
      </div>
    </section>
  );
};

export default Experience;
