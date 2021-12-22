import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <form className="messageForm">
        Leave me a message: <br />
        <input type="text" name="message" /> <br />
        <br />
        <input type="button" onclick="somethingsomeday" value="Submit" />
      </form>
    </div>
  );
}
