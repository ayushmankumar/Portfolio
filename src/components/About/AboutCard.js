import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ayushman Kumar</span> .
            <br />
            <br />
            I’m passionate about building scalable web applications and solving
            real-world problems using data.
            <br />
            <br />
            I work with{" "}
            <span className="purple">
              MERN Stack (MongoDB, Express.js, React.js, Node.js)
            </span>{" "}
            and also have strong skills in{" "}
            <span className="purple">
              SQL, Excel, Tableau, and Python
            </span>
            .
            <br />
            <br />
            I enjoy creating full-stack applications, designing dashboards, and
            turning raw data into meaningful insights that drive better decisions.
            <br />
            <br />
            Outside of tech, I like engaging in activities that keep me creative
            and refreshed:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Building personal projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into impactful solutions."
          </p>

          <footer className="blockquote-footer">
            Ayushman Kumar
          </footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;