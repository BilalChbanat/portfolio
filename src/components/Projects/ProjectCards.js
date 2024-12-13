import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text style={{ textAlign: "justify" }}>
      {props.description}
    </Card.Text>

    <ListGroup variant="flush" style={{ backgroundColor: "transparent", textAlign: "left",marginLeft:-5 }}>
      <ListGroup.Item style={{ backgroundColor: "transparent", color: "#ffffff", textAlign: "left"}}>
        <strong style={{color:"#5a3676"}}>Technologies Used:</strong> {props.technologies}
      </ListGroup.Item>
      <ListGroup.Item style={{ backgroundColor: "transparent", color: "#ffffff", textAlign: "left" }}>
        <strong style={{color:"#5a3676"}}>Tools:</strong> {props.tools}
      </ListGroup.Item>
    </ListGroup>

    <Button variant="primary" href={props.ghLink} target="_blank">
      <BsGithub /> &nbsp;
      {props.isBlog ? "Blog" : "GitHub"}
    </Button>
    {"\n"}
    {"\n"}

    {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

    {!props.isBlog && props.demoLink && (
      <Button
        variant="primary"
        href={props.demoLink}
        target="_blank"
        style={{ marginLeft: "10px" }}
      >
        <CgWebsite /> &nbsp;
        {"Demo"}
      </Button>
    )}
  </Card.Body>
</Card>

  );
}
export default ProjectCards;
