import React from "react";
import Header from "../header/Header";
import "./Experience.css";

const Experience = () => {
  return (
    <React.Fragment>
      <Header title="Experience" emoji="💼" />
      <div className="container experience">
        <section className="tales">
          <h2>Tales.dk</h2>
          <i>2021 september - now</i>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text
          </p>
        </section>
        <section className="holder100">
          <h2>Holder 100 ApS</h2>
          <i>2020 november - 2021 june</i>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
          </p>
        </section>
        <section className="supeo">
          <h2>Supeo ApS</h2>
          <i>2019 july - 2019 november</i>
          <p>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text
          </p>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Experience;
