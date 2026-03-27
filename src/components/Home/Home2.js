import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m passionate about building impactful digital solutions and working with data to solve real-world problems.
              <br />
              <br />
              I have experience in both development and analytics, with hands-on skills in
              <i>
                <b className="purple">
                  {" "}
                  MERN Stack (MongoDB, Express.js, React.js, Node.js){" "}
                </b>
              </i>
              as well as
              <i>
                <b className="purple">
                  {" "}
                  SQL, Excel, Tableau, and Python{" "}
                </b>
              </i>.
              <br />
              <br />
              I enjoy building full-stack web applications, creating interactive dashboards, and transforming raw data into meaningful insights that support better decision-making.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Web Development, Data Analytics, and Data Visualization{" "}
                </b>
              </i>
              — where I can combine technical skills with problem-solving to create efficient and scalable solutions.
              <br />
              <br />
              I’m focused on building a strong portfolio and becoming a versatile developer with a data-driven mindset.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;