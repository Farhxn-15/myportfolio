import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import comingSoon from "../../Assets/Projects/coming-soon.png"; // make sure to add an image here or replace with your own

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
              imgPath={comingSoon}
              isBlog={false}
              title="Coming Soon"
              description="Exciting projects are on the way. Stay tuned!"
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Coming Soon"
              description="Exciting projects are on the way. Stay tuned!"
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Coming Soon"
              description="Exciting projects are on the way. Stay tuned!"
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
