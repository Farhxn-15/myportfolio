import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Farhan Mallick </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently pursuing my B.Tech in Information Technology.
            <br />
            I have a strong foundation in programming languages including C, Java, HTML, CSS, JavaScript, and React, and I am comfortable working in Linux environments.
            <br />
            During my internship at Gamerboard, a Singapore-based startup focused on esports, I contributed to a production-based application for esports players, gaining valuable real-world experience.
            <br />
            I am passionate about technology and especially excited about the potential of AI tools in transforming industries.
            <br />
            My career goal is to work with a reputed company where I can continuously learn, grow, and advance while making meaningful contributions.
            <br />
            <br />
            Apart from coding, I have a range of interests that keep me engaged and balanced:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing story-driven video games on both console and PC
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the gym and practicing boxing to stay physically fit and disciplined
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and keeping up with advancements in AI and software development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference and never stop learning."
          </p>
          <footer className="blockquote-footer">Farhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
