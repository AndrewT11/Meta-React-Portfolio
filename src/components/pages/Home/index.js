import React from "react";
import "./home.css";
import Me from "./images/headshotnobg.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-left-wrapper">
          <h2 className="home-greeting">Salutations, you've stumbled upon</h2>
          <h1 className="home-name">
            Andrew Tran's <br />
            Portfolio Page
          </h1>
          <div className="home-title">
            <div className="home-title-wrapper">
              <div className="home-title-jobs">Aspiring Web Developer</div>
              <div className="home-title-jobs2">Problem Solver</div>
              <div className="home-title-jobs3">Dog Father</div>
              <div className="home-title-jobs4">Basketball Junkie</div>
              <div className="home-title-jobs5">Sci-fi Nerd</div>
            </div>
          </div>
          <div className="home-desc">
            A software engineer in training that is versed in front-end and
            back-end web development. Interested in creating eye-catching, fresh
            websites. Interested being the keyword. Implementation is getting
            there. :P
          </div>
        </div>
      </div>
      <div className="home-right">
        <img src={Me} alt="" className="home-image"></img>
      </div>
    </div>
  );
}
