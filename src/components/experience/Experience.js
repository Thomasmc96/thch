import React, { useState } from "react";
import Header from "../header/Header";
import "./Experience.css";
import icon from "../../assets/img/icons/experience-white.svg";
import icon2 from "../../assets/img/icons/school-white.svg";
import talesBrand from "../../assets/img/tales.jpg";
import holder100Brand from "../../assets/img/holder100.jpg";
import supeoBrand from "../../assets/img/supeo.jpg";
import zealandBrand from "../../assets/img/zealand.jpg";

const Experience = () => {
  const [showSchool, setShowSchool] = useState(false);

  // Handle switch
  const handleShowSchool = () => setShowSchool(!showSchool);

  return (
    <React.Fragment>
      <Header title="Experience" icon={icon} />
      <div className="switchBox">
        <img src={icon} alt="Work Icon" className="icon workIcon" />
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleShowSchool}
            checked={showSchool}
          />
          <span className="slider round"></span>
        </label>
        <img src={icon2} alt="School Icon" className="icon" />
      </div>
      <div className="container experience">
        {!showSchool && (
          <React.Fragment>
            <section className="tales">
              <img src={talesBrand} alt="Tales brand" />
              <div>
                <h2>Full-Stack Web Developer</h2>
                <p>
                  <a href="https://tales.dk" target="_blank" rel="noreferrer">
                    @Tales
                  </a>
                </p>
                <i>2021 september - now</i>
                <p>
                  As a full-stack developer at Tales I've taken responsiblity of
                  creating API's, fetching data from 3rd party collaborators,
                  handling data between our server and database, creating design
                  for the UI and working as a part of a team with the agile
                  development method Scrum. The main tools I've used at Tales
                  are PHP, MySQL, Vue, JavaScript, Sass and HTML.
                </p>
              </div>
            </section>
            <section className="holder100">
              <img src={holder100Brand} alt="Holder100 brand" />
              <div>
                <h2>Study employee</h2>
                <p>
                  <a
                    href="https://holder100.dk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @Holder 100 ApS
                  </a>
                </p>
                <i>2020 november - 2021 june</i>
                <p>
                  My time at Holder 100 happend at the end of my study as web
                  developer. Here I've constructed websites for customers with
                  the use of WordPress, PHP and MySQL. For my bachelor project I
                  created a SPA with React, PHP and MySQL which the purpose of
                  sharing files and tasks between Holder 100 and their
                  customers. The final result is live at{" "}
                  <a
                    href="https://mit.holder100.dk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    mit.holder100.dk
                  </a>
                  .
                </p>
              </div>
            </section>
            <section className="supeo">
              <img src={supeoBrand} alt="Supeo brand" />
              <div>
                <h2>Study employee</h2>
                <p>
                  <a href="https://supeo.dk" target="_blank" rel="noreferrer">
                    @Supeo ApS
                  </a>
                </p>
                <i>2019 july - 2019 november</i>
                <p>
                  Supeo hired me and two of my fellow students as an internship
                  but also as a part student job. Here we developed websites for
                  customers with tools as React, Vue, PHP, Laravel, Nodejs,
                  MySQL, MongoDB and GraphQL.
                </p>
              </div>
            </section>
          </React.Fragment>
        )}
        {showSchool && (
          <React.Fragment>
            <section className="webDevelopment">
              <img src={zealandBrand} alt="Zealand brand" />
              <div>
                <h2>Prof. bachelor in Web Development</h2>
                <p className="atZealand">
                  <a
                    href="https://zealand.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @Zealand - Academy of Technologies and Business
                  </a>
                </p>
                <i>2020 february - 2021 july</i>
                <i>
                  Average grade: <b>11.1</b>
                </i>
              </div>
            </section>
            <section className="computerScience">
              <img src={zealandBrand} alt="Zealand brand" />
              <div>
                <h2>AP Degree in Computer Science</h2>
                <p className="atZealand">
                  <a
                    href="https://zealand.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @Zealand - Academy of Technologies and Business
                  </a>
                </p>
                <i>2017 september - 2020 january</i>
                <i>
                  Average grade: <b>11.7</b>
                </i>
              </div>
            </section>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Experience;
