import React from "react";
import "./CommonCss.css";
import "./AboutMe.css";
import ProfileLogo from "../assets/img/undraw_male_avatar_323b.svg";
export default function AboutMe() {
  return (
    <div className="about-me container-wrapper">
      <div className="info">
        <ul>
          <li>Hi š, I'm JAYANTH.</li>
          <li>A new born šŖ“ frontend developer from India š®š³.</li>
          <li>š­ Iām currently working on Business Payment Ecosystem.</li>
          <li>š± Iām currently learning React.</li>
        </ul>
      </div>
      <div>
        <img src={ProfileLogo} alt="Profile Logo" />
      </div>
    </div>
  );
}
