import React from "react";
import "./about.css";
import Bebop from "./images/bebopsilhoutte.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card">
          <img src={Bebop} alt="" className="about-image"></img>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">Get to know me corner</h1>
        <h4 className="about-desc">
          Hey again. Thanks for taking some interest in learning a little bit
          more about me. <br />
          <br />
          I have held many hats in my life. From a financial advisor, to a
          physics/forensic science high school teacher. Ready to spread my wings
          further, I left the teaching field and began my own boba tea shop in
          2018. <br />
          <br />
          It was a fun and hectic ride the first year. Learning how to run a
          business took much time and effort, but it was rewarding. And seeing
          customers return weekly, sometimes daily, because they enjoyed my
          drinks was a true joy. Unfortunately, Covid hit in 2020. This led to
          me selling my business and searching for another career path. <br />
          <br />
          Not all is lost. I joined the SMU Full-Stack Web Development Camp. And
          I have taken great joy in learning the process involved with
          developing front and back-end components for websites. I hope to use
          this as a spring board to a long career in web development in the
          future.
        </h4>
      </div>
    </div>
  );
}
