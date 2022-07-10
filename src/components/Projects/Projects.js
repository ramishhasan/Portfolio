import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
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
              isBlog={false}
              title="Start stop watch"
              description="I made a start stop watch by using the basic javascript and Reactjs concepts. In this there are three buttons
              start,stop and reset which works for starting stopping and resetting of the clocks respectively.."
              ghLink="https://github.com/ramishhasan/srtstop/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Wheather applcation"
              description="I created a wheather application by which we can see the current temperature of different cities."
              ghLink="https://github.com/ramishhasan/Wheather-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Payment date predictor"
              description="I created a Machine Learning models which predict that at which date the invoices is going to get paid."
              ghLink="https://github.com/ramishhasan/Payment-date-prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  
  );
}

export default Projects;
