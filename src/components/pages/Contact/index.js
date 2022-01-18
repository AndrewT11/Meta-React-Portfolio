import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <form className="messageForm">
        <input type="text" value="Name" name="name" className="contact-name" />
        <br />
        <input
          type="text"
          value="E-mail"
          name="email"
          className="contact-email"
        />
        <br />
        <input
          type="text"
          value="message"
          name="message"
          className="contact-message"
        />
        <br />
        <br />
        <input type="button" onclick="somethingsomeday" value="Submit" />
      </form>
    </div>
  );
}
