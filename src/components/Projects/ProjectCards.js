import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";

function ProjectCard({ imgPath, isBlog, title, description, ghLink, demoLink, demoLabel }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="project thumbnail" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <div className="d-flex gap-2">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              style={{ minWidth: "80px" }}
            >
              <BsGithub style={{ fontSize: "1rem", verticalAlign: "middle" }} /> &nbsp;
              GitHub
            </Button>
          )}

          {demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ minWidth: "70px" }}
            >
              <AiOutlineDesktop style={{ fontSize: "0.85rem", verticalAlign: "middle" }} /> &nbsp;
              {demoLabel || "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
