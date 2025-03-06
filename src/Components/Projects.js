import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portfolioimg from "../assets/img/Website Portfolio.png";
import nutrifit from "../assets/img/project2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import foodjournal from "../assets/img/androidapp.png";
import PIASGames from "../assets/img/PIASGames.png"; 
import Compiler from "../assets/img/Compiler.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "Portfolio Website",
      description: "This is the website you are currently located. Take a look around and see all the features I have implemented.",
      imgUrl: portfolioimg,
      link: "https://peter-tillmann88.github.io/phtillmann/"
    },
    {
      title: "Nutrifit",
      description: "This is a project that allows users to track diet and exercise, allowing for visualization of these numbers and predictions on future health based on these trends.",
      imgUrl: nutrifit,
      link: "https://github.com/peter-tillmann88/Nutrifit"
    },
    {
      title: "Food Journal Android App",
      description: "This is an app that allows you to track your food and exercise, and comes with a built-in to-do list tab.",
      imgUrl: foodjournal,
      link: "https://github.com/peter-tillmann88/Food-Journal"
    },
  ];

  const projectsTab2 = [
    {
      title: "PIAS Games",
      description: "This is an video game e-commerce web store allowing you to make an account and purchase items through cart.",
      imgUrl: PIASGames,
      link: "https://github.com/peter-tillmann88/PIASGames"
    },
    {
      title: "B-minor Compiler",
      description: "This project creates a compiler for a subset of C includes scanning, parsing, typechecking, and code generation.",
      imgUrl: Compiler,
      link: "https://github.com/peter-tillmann88/bminor_compiler"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Here's a selection of projects that highlight my skills in action. From individual assignments that have challenged my problem-solving abilities to group projects that showcase my teamwork capabilities, each represents a piece of my growing expertise in computer science.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              link={project.link}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              link={project.link}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
