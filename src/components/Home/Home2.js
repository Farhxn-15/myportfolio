import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p
              className="home-about-body"
              style={{ textAlign: "justify", fontSize: "1.15em", lineHeight: "1.6" }}
            >
              I am deeply passionate about programming and technology, continuously seeking to expand my expertise and develop high-quality, impactful software solutions.
              <br />
              <br />
              I have hands-on experience with foundational programming languages including{" "}
              <i>
                <b className="purple">C, Java, Python, JavaScript, HTML, and CSS</b>
              </i>
              , enabling me to build versatile and efficient applications across platforms.
              <br />
              <br />
              I am proficient in modern web development technologies and frameworks such as{" "}
              <b className="purple">React.js, Node.js, and Next.js</b>, which I use to create scalable, responsive, and user-centric applications.
              <br />
              <br />
              Additionally, I have working knowledge of <b className="purple">Linux</b> systems and <b className="purple">DevOps</b> practices, which help me deliver robust and automated deployment workflows.
              <br />
              <br />
              I am committed to lifelong learning and always stay updated with emerging technologies to innovate and contribute effectively in software development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to{" "}
              <span className="purple">connect</span> with me on the following platforms.
            </p>
            <ul
              className="home-about-social-links"
              style={{ listStyleType: "none", paddingLeft: 0 }}
            >
              <li className="social-icons">
                <a
                  href="https://github.com/Farhxn-15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/FarhanMalick15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/farhan-mallick-708a53233"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/farhxn.15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
