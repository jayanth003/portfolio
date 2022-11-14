import React from "react";
import "./CommonCss.css";
import "./AboutMe.css";
import ProfileLogo from "../assets/img/undraw_male_avatar_323b.svg";
export default function AboutMe() {
  return (
    <div className="about-me container-wrapper">
      <div className="info">
        <ul>
          <li>Hi 👋, I'm JAYANTH.</li>
          <li>A new born 🪴 frontend developer from India 🇮🇳.</li>
          <li>🔭 I’m currently working on Business Payment Ecosystem.</li>
          <li>🌱 I’m currently working with React + Typescript.</li>
        </ul>
      </div>
      <div>
        <img src={ProfileLogo} alt="Profile Logo" />
      </div>
    </div>
  );
}
