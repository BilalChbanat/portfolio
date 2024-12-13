import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stadiumStream from "../../Assets/Projects/stadium.webp";
import evento from "../../Assets/Projects/event-planning.webp";
import taskify from "../../Assets/Projects/tasks.webp";
import eKolshi from "../../Assets/Projects/ecommerce.webp";
import batiCuisine from "../../Assets/Projects/domestic-kitchen.webp";
import citronix from "../../Assets/Projects/farm.webp";
import ebankify from "../../Assets/Projects/bank-building.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stadiumStream}
              isBlog={false}
              title="StadiumStream"
              description="An online ticketing platform for CAN 2023, providing a seamless and secure ticket purchase experience for African football fans."
              technologies="PHP, JavaScript, HTML, CSS"
              tools="Jira, Agile Scrum"
              ghLink="https://github.com/BilalChbanat/StaduimStream"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evento}
              isBlog={false}
              title="Evento"
              description="A secure event management platform offering a user-friendly interface to organize and attend events seamlessly."
              technologies="Laravel, PHP, JavaScript, HTML, CSS"
              tools="Jira, Agile Scrum"
              ghLink="https://github.com/BilalChbanat/Evento"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              description="A task management app with features to create, update, delete tasks, and secure login/registration for personal and collaborative productivity."
              technologies="Vue.js, Laravel, PHP, JavaScript, HTML, CSS"
              tools="Jira, Agile Scrum"
              ghLink="https://github.com/BilalChbanat/Taskify-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eKolshi}
              isBlog={false}
              title="E-kolshi (E-commerce)"
              description="A dynamic e-commerce platform with features for managing products, categories, users, orders, and wishlists. Offers an intuitive shopping experience with a modern UI."
              technologies="Laravel, JavaScript, HTML5, TailwindCSS"
              tools="Jira, Agile Scrum"
              ghLink="https://github.com/BilalChbanat/E-kolshi-E-commerce-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={batiCuisine}
              isBlog={false}
              title="BatiCuisine"
              description="A Java-based application for managing construction and renovation projects, including project tracking, cost estimation, client management, and quote generation."
              technologies="Java, JEE, PostgreSQL, Docker"
              tools="JUnit"
              ghLink="https://github.com/BilalChbanat/BatiCuisine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={citronix}
              isBlog={false}
              title="Citronix"
              description="A farm management application for lemon farms, allowing tracking and management of fields, trees, harvests, and sales with robust data validation and centralized exception handling."
              technologies="Spring Boot, JPA (Hibernate), PostgreSQL"
              tools="MapStruct, Lombok, javax.validation"
              ghLink="https://github.com/BilalChbanat/Citronix-api"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebankify}
              isBlog={false}
              title="eBankify (Online Banking Management)"
              description="A modular online banking application with role-based access control, account and transaction management, and centralized exception handling. Includes database version control and robust security."
              technologies="Spring Boot, Spring Data JPA, Spring Security, Liquibase, Junit, Mockito"
              tools="JUnit, Lombok, MapStruct, Bcrypt"
              ghLink="https://github.com/BilalChbanat/eBankify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
