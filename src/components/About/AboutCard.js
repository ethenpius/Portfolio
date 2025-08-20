import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ethen Pius </span><br/>
            A <span className="purple"> Cybersecurity Analyst, Digital forensics Specialist and developer</span>
            <br />
            I worked with Empower Africa Concept International Limited as a Digital Forensics and Electronic evidence Lead Trainer
            <br /> <br />
            I did Bsc in Computer Security and digital forensics
            at Jaramogi Oginga Odinga University
            <br /> <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Blogs and Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ethen @ Tech Spectre</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
