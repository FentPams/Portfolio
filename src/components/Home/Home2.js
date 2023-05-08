import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import neu from "../../Assets/neu.svg";
import nyu from "../../Assets/nyu.svg";
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
        <Row className="align-items-top">
          <Col
            md={4}
            className="home-about-description"
            style={{ height: "300px" }}
          >
            <div style={{ textAlign: "left" }}>
              <h1 style={{ fontSize: "1.9em" }}>
                <span className="purple"> "Sciences of me" </span>
              </h1>
            </div>
            <p className="home-about-body">
              I am currently a graduate student studying Computer Science
              in&nbsp;
              <img src={neu} alt="Northeastern University" />
              <br />
              <br /> I am a software engineer!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col
            md={4}
            className="home-about-description"
            style={{ height: "300px" }}
          >
            <div style={{ textAlign: "right" }}>
              <h1 style={{ fontSize: "1.9em" }}>
                <span className="purple"> "Arts of me" </span>
              </h1>
              <p className="home-about-body" style={{ textAlign: "right" }}>
                I have a Master of Arts in teaching and learning degree
                from&nbsp;
                <img src={nyu} alt="nyu" />
                <br />
                <br /> I am a co-founder and teacher of start-up language
                instituion in Shanghai.
                <br />
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <div style={{ textAlign: "left" }}>
              <h1 style={{ fontSize: "1.3em" }}>
                <span className="purple"> " </span>Why switch 👩🏻‍🏫 to 👩🏻‍💻 ?{" "}
                <span className="purple"> " </span>
              </h1>
            </div>
            <br /> I love tech and creating!&nbsp; &nbsp; Love programming and
            coding! &nbsp;&nbsp; Love keeping learning and taking challenges!
            <br />I am fluent in programming langauge like
            <i>
              <b className="purple">
                {" "}
                Python, Java, C, Javascript, SQL and R.{" "}
              </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products </b> and also
              in areas related to{" "}
              <b className="purple">Mobile App development.</b>
            </i>
          </Col>
        </Row>
        <Row style={{ marginTop: "7rem" }}>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fentpams"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/feng-xinyi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
