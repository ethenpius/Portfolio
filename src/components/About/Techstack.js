import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiPython, 
  DiGit 
} from "react-icons/di";
import { FaShieldAlt, FaUserSecret } from "react-icons/fa";
import { SiKalilinux, SiLinux } from "react-icons/si"; // Kali + Parrot alt

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt title="Security" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserSecret title="Cybersecurity" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux title="Kali Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Parrot OS" />
      </Col>
    </Row>
  );
}

export default Techstack;
