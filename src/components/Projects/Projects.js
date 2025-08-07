import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import comingSoon from "../../Assets/Projects/coming-soon.png"; // Replace with actual images for each project
import p2 from "../../Assets/Projects/p2.png";
import p3 from "../../Assets/Projects/p3.png";
import p4 from "../../Assets/Projects/p4.png";
import p5 from "../../Assets/Projects/p5.png";

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
              imgPath={comingSoon} // Replace with actual Rural Health AI Assistant image
              isBlog={false}
              title="Rural Health AI Assistant"
              description="A web based AI-powered platform designed for sympton analysis and support rural  with diagnostics healthcare recommendations."
              ghLink="https://github.com/Farhxn-15" // Replace with actual GitHub repo link
              viewLink="https://myportfolio-md-farhan-mallicks-projects.vercel.app/project" // Replace with live project/demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2} // Replace with actual Portfolio image
              isBlog={false}
              title="Portfolio"
              description="A professional portfolio showcasing my background, skills, projects, and resume, with a focus on delivering high-quality web solutions."
              ghLink="https://github.com/Farhxn-15/myportfolio" // Replace with actual GitHub repo link
              viewLink="https://myportfolio-md-farhan-mallicks-projects.vercel.app/" // Replace with live site link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3} // Replace with actual Fake URL Detection image
              isBlog={false}
              title="Fake URL Detection Website"
              description="A web app that detects phishing and fake URLs to enhance security with effective detection and a simple interface."
              ghLink="https://github.com/Farhxn-15/Fake-Url-Detector" // Replace with actual GitHub repo link
              viewLink="https://fake-url-detector-0fz9.onrender.com/" // Replace with live project link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4} // Replace with actual E-commerce Website image
              isBlog={false}
              title="E-commerce Website"
              description="A fully featured e-commerce website built with modern technologies, with admin dashboard and payment gateway."
              ghLink="https://github.com/Farhxn-15/Web-ecom" // Replace with actual GitHub repo link
              viewLink="https://mehndi-web.web.app/" // Replace with live project link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5} // Replace with actual Invoice Manager image
              isBlog={false}
              title="Invoice Manager Web"
              description="A web app for managing invoices efficiently with a secure backend. It streamlines billing and helps track payments seamlessly."
              ghLink="https://github.com/Farhxn-15/invoice-manager" // Replace with actual GitHub repo link
              viewLink="https://invoicemanager.alwaysdata.net/" // Replace with live project link
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
