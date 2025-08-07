import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiEye } from "react-icons/fi";  // import eye icon

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* View Button: shown if viewLink prop is provided */}
        {props.viewLink && (
          <Button
            variant="primary"
            href={props.viewLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "10px" }}
          >
            <FiEye /> &nbsp; View
          </Button>
        )}

        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* Demo Button: conditional rendering */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
