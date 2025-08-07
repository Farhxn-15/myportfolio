import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython, DiHtml5, DiCss3, DiJavascript1, DiJava,
  DiLinux, DiDocker, DiGit, DiNodejs, DiReact,
  DiMongodb
} from "react-icons/di";
import {
  SiFirebase, SiMysql, SiAmazonaws, SiGithubactions,
  SiJenkins, SiTerraform
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
  <div style={{
    fontSize: "1.5em",       // Large font size to mimic icon size
    fontWeight: "bold",    // Bold for visibility
    color: "#fff",         // White color to match other icons
    lineHeight: 1,
    userSelect: "none",
  }}>
    C
  </div>
  {/* No skill name needed below since letter itself is clear */}
</Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiFirebase />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiPython />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiMysql />
        {/* Name removed for MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiHtml5 />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiCss3 />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJavascript1 />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJava />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiLinux />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiAmazonaws />
        {/* Name removed for AWS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiDocker />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiGit />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiGithubactions />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>GitHub Actions</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiJenkins />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiTerraform />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Terraform</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiNodejs />
        {/* Name removed for Node.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiReact />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiMongodb />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <FaTerminal />
        <div style={{ color: "#fff", marginTop: 8, fontSize: "0.35em" }}>Terminal</div>
      </Col>
    </Row>
  );
}

export default Techstack;
