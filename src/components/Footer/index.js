import React, { useState } from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h1 class="heading">Connect with me!</h1>
      <nav class="contactbar">
        <ul>
          <li>
            <a href="mailto:TranAndrewWebDev@gmail.com" target="_blank">
              <i class="fas fa-envelope-open-text fa-4x"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/AndrewT11" target="_blank">
              <i class="fab fa-github fa-4x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrew-tran-011/"
              target="_blank"
            >
              {" "}
              <i class="fa fa-linkedin-square fa-4x"></i>
            </a>
          </li>
          <li>
            <a href="Resume1.pdf">
              <i class="far fa-file fa-4x"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
