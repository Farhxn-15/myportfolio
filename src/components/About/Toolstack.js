import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAmazonaws,
  SiDocker,
  SiJenkins,
  SiTerraform,
  SiGithubactions,
  SiLinux,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVisualstudiocode style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiLinux style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiAmazonaws style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiDocker style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiJenkins style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiTerraform style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>Terraform</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiGithubactions style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>GitHub Actions</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <FaTerminal style={{ fontSize: "2em" }} />
        <div style={{ color: "#fff", marginTop: 6, fontSize: "0.35em" }}>Terminal</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
