import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "../Certificates/CertificateCard";
import Particle from "../Particle";

import cert1 from "../../Assets/Certificates/cert1.jpg";
import cert2 from "../../Assets/Certificates/cert2.jpg";
import cert3 from "../../Assets/Certificates/cert3.jpg";
import cert4 from "../../Assets/Certificates/cert4.jpg";
import cert5 from "../../Assets/Certificates/cert5.jpg";
import cert6 from "../../Assets/Certificates/cert6.jpg";
import delloite from "../../Assets/Certificates/delloite.jpg";
import EA from "../../Assets/Certificates/EA.jpg";
import JP from "../../Assets/Certificates/JP.jpg";
import Mastercard from "../../Assets/Certificates/Mastercard.jpg";
import PWC from "../../Assets/Certificates/PWC.jpg";
import seimens from "../../Assets/Certificates/seimens.jpg";




function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some certifications I have earned.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert1}
              title="Google Data Analytics Capstone: Complete a Case Study"
              certLink="https://coursera.org/share/1427c80de9af0039cda88aaa88262fcc"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert2}
              title="Algorithmic Toolbox"
              certLink="https://coursera.org/share/17f78fa4a7a6f2c9990b5b75cd73118a"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert3}
              title="Web Development Certification"
              certLink="https://www.udemy.com/certificate/UC-4347f0ae-cc63-4be9-b044-5cb0956fe3a0/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert4}
              title="Exploratory Data Analysis for Machine Learning"
              certLink="https://coursera.org/share/cc896856bf37955f4322c9894e08f4d8"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert5}
              title="Fundamentals of Network Communication"
              certLink="https://coursera.org/share/2a34a72260e4d7cf457b0faacc0f940c"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert6}
              title="Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization"
              certLink="https://coursera.org/share/eb47f1af6854f3309cf2bfcc0dac114b"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={delloite}
              title="Delloite : Data Analytics Job Simulation"
              certLink="https://www.theforage.com/simulations/deloitte-au/data-analytics-s5zy/completed"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={EA}
              title="Electronic Arts : Product Management Job Simulation"
              certLink="https://www.theforage.com/simulations/electronic-arts/product-management-5c7c/completed"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={JP}
              title="JP Morgan : Software Engineering Job Simulation"
              certLink="https://www.theforage.com/simulations/jpmorgan/advanced-software-engineering-r0fm"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Mastercard}
              title="Mastercard : Advisors & Consulting Services Job Simulation"
              certLink="https://www.theforage.com/simulations/mastercard/advisors-client-services-xvlw/completed"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={PWC}
              title="PWC : Management Consulting Simulation"
              certLink="https://www.theforage.com/simulations/pwc-us/management-consulting-gwcm/completed"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={seimens}
              title="Seimens : Project Manager Job Simulation"
              certLink="https://www.theforage.com/simulations/siemens-mobility/project-management-qydx/completed"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;