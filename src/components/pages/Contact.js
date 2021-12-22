import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1 class="heading">Contact Page</h1>
      <nav class="contactbar">
        <ul>
          <li>
            <a href="mailto:TranAndrewWebDev@gmail.com">
              <i class="fas fa-envelope-open-text fa-4x"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/AndrewT11">
              <i class="fab fa-github fa-4x"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andrew-tran-011/">
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
