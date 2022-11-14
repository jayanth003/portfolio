import React from "react";
import "./CommonCss.css";
import "./Skills.css";
import HTMLLogo from "../assets/img/html.svg";
import CSSLogo from "../assets/img/css.svg";
import BSLogo from "../assets/img/bootstrap.svg";
import JSLogo from "../assets/img/javascript.svg";
import VUELogo from "../assets/img/vuejs.png";
import REACTLogo from "../assets/img/Reactjs.png";
export default function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-info container-wrapper">
        <a href="https://html.com/" target="_blank" rel="noreferrer">
          <img src={HTMLLogo} alt="Html Logo" />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <img src={CSSLogo} alt="Css Logo" />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img src={JSLogo} alt="Javascript Logo" />
        </a>

        <a href="https://bootstrap-vue.org/" target="_blank" rel="noreferrer">
          <img src={BSLogo} alt="Bootstrap Logo" />
        </a>

        <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
          <img src={VUELogo} alt="Vuejs Logo" />
        </a>

                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src={REACTLogo} alt="Reactjs Logo" />
        </a>
      </div>
    </div>
  );
}
