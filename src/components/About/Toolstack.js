import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiWindows,
  SiLinux,
  SiKalilinux,
  SiGrafana,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows OS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Parrot OS (Linux)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux title="Kali Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana title="Grafana" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Wazuh logo as image since it's not in react-icons */}
        <img
          src="https://wazuh.com/uploads/2021/02/wazuh-logo-blue.png"
          alt="Wazuh"
          title="Wazuh"
          style={{ width: "50px", height: "50px" }}
        />
      </Col>
    </Row>
  );
}

export default Toolstack;
