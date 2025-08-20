import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Falcosidekick"
              description="A simple daemon for enhancing available outputs for Falco. It takes a falco's event and forwards it to different outputs.

It works as a single endpoint for as many as you want falco instances."
              ghLink="https://github.com/ethenpius/falcosidekick"
              demoLink="https://www.youtube.com/watch?v=86Y138krxWw"
              demoLabel="Research"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SIEM-Wazuh-Rules"
              description="Wazuh project + next-gen rulesets delivering fewer false positives and richer context via cross-source enrichment."
              ghLink="https://github.com/ethenpius/Wazuh-Rules-Project"
              demoLink="https://www.youtube.com/watch?v=mKijuwrTeRM&list=PLI0vJRMEGNYRVuQWxO7BPZAe_G_mM9d66"
              demoLabel="Research"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="steganography-stegohunter"
              description="About
A steganography-based website to encrypt messages within photos. Keep your secret message and authorize it with your password and reveal the secret message by decrypting the photo with a password."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://steganography-stegohunter.vercel.app/"
              demoLabel="Demo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
