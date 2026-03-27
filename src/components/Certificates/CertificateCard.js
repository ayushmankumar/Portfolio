import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* View Certificate Button */}
        {props.certLink && (
          <Button
            variant="primary"
            href={props.certLink}
            target="_blank"
            style={{ marginTop: "10px" }}
            className="btn-primary"
          >
            <CgWebsite style={{ marginBottom: "2px" }} />{" "}
            &nbsp; View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;