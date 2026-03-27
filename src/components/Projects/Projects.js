import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CarGo from "../../Assets/Projects/CarGo.png";
import Daksaab from "../../Assets/Projects/Daksaab.png";
import ecom from "../../Assets/Projects/ecom.png";
import Careerpilot from "../../Assets/Projects/Careerpilot.png";
import paytm from "../../Assets/Projects/paytm.png";
import Catchsss from "../../Assets/Projects/catchsss.png";

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
              imgPath={Careerpilot}
              isBlog={false}
              title="Careerpilot"
              description="Navigate your career path with an AI advantage. Sensai is an intelligent platform designed to help you achieve your professional goals, from building the perfect resume to acing your next interview."
              ghLink="https://github.com/ayushmankumar/careerpilot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Catchsss}
              isBlog={false}
              title="Catchsss"
              description="A classic Snake Game built using Python, where the player controls a growing snake to collect food while avoiding collisions with walls and itself."
              ghLink="https://github.com/ayushmankumar/Catchsss"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce.io"
              description="A full-stack eCommerce web application built using Python, enabling users to browse products, manage carts, and securely place orders with a seamless experience."
              ghLink="https://github.com/ayushmankumar/Ecommerce-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarGo}
              isBlog={false}
              title="CarGo"
              description="It is a modern full-stack car rental web application built using MERN STACK, allows customers to explore, search, and book cars, and also provides a dashboard for car owners to list and manage vehicles."
              ghLink="https://github.com/ayushmankumar/CarGo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paytm}
              isBlog={false}
              title="Paytm"
              description="A responsive Paytm clone built using HTML, CSS, and JavaScript, replicating the UI and core functionalities of a digital payment platform."
              ghLink="https://github.com/ayushmankumar/Paytm-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Daksaab}
              isBlog={false}
              title="Daksaab"
              description="Daksaab is a modern, full-stack web application that allows patients to seamlessly book online appointments with doctors. It also provides dedicated dashboards for Admins and Doctors to manage schedules, availability, and appointments."
              ghLink="https://github.com/ayushmankumar/Daksaab"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
