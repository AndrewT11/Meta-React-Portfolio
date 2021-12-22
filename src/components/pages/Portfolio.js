import React from "react";
import "./portfolio.css";
import project1 from "../../images/madquickstatsSS.png";
import project2 from "../../images/1stteamallprofile.png";
import project3 from "../../images/dailyplannerSS.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="heading">Portfolio</h1>
      <div className="gallery port-column">
        <figure className="port-item">
          <h2 className="item-header">Mad Quick Stats</h2>
          <a
            className="hw1"
            href="https://ajax12233512.github.io/Mad-Quick-Stats/"
          >
            <img
              src={project1}
              alt="Updated Basketball and Hockey information"
            />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/Mad-Quick-Stats';"
          >
            Github Repository
          </button>
        </figure>
        <figure className="port-item">
          <h2 className="item-header">1st Team All Pro-file</h2>
          <a
            className="hw1"
            href="https://drive.google.com/file/d/1T7l87CgCK__L1DTm9UTIFNQvapC50GnQ/view?usp=sharing"
          >
            <img src={project2} alt="3 Team profile cards" />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/1st-Team-All-Pro-file';"
          >
            Github Repository
          </button>
        </figure>
        <figure className="port-item">
          <h2 className="item-header">Daily Planner</h2>
          <a
            href="https://andrewt11.github.io/Daily-Planner-for-Life/"
            className="hw2"
          >
            <img src={project3} alt="Daily planner with time feature" />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/Daily-Planner-for-Life';"
          >
            Github Repository
          </button>
        </figure>
      </div>
    </div>
  );
}
