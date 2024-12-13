import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bilal Chbanat</span> from{" "}
            <span className="purple">Marrakech, Morocco.</span>
            <br />
            I am a full-stack developer currently studying at YouCode, Youssoufia.
            <br />
            I hold a diploma in Mobile Development from OFPPT and have
            experience in web development projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always aim to create solutions that have a real impact!"{" "}
          </p>
          <footer className="blockquote-footer">Bilal Chbanat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
