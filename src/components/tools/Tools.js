import React from "react";
import Header from "../header/Header";
import "./Tools.css";

const Tools = () => {
  return (
    <React.Fragment>
      <Header title="Tools" emoji="🔨" />
      <div className="container tools">
        <section>
          <h1>Frontend</h1>
          <div className="badges">
            <span className="badge html5">HTML5</span>
            <span className="badge css3">CSS3</span>
            <span className="badge javascript">JavaScript</span>
            <span className="badge react">React</span>
            <span className="badge reactNative">React Native</span>
          </div>
        </section>
        <section>
          <h1>Backend</h1>
          <div className="badges">
            <span className="badge php">PHP</span>
            <span className="badge nodejs">Nodejs</span>
            <span className="badge mysql">MySQL</span>
            <span className="badge mongodb">MongoDB</span>
            <span className="badge api">RESTful API</span>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Tools;
