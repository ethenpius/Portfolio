import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Certifications() {
  // Certificates stored in public folder
  const certificates = [
    { name: "CAK Hackathon", file: "CAK Hackathon.pdf" },
    { name: "CISSP Certification", file: "CISSP certification.pdf" },
    { name: "Huawei Certificate", file: "Huawei Certificate.pdf" },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my certifications. You can view or download them.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="cert-card">
                <Card.Body>
                  <Card.Title>{cert.name}</Card.Title>
                  <Button
                    variant="primary"
                    href={`/${cert.file}`}
                    target="_blank"
                  >
                    View
                  </Button>{" "}
                  <Button
                    variant="success"
                    href={`/${cert.file}`}
                    download
                  >
                    Download
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
