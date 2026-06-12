import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import portfolioimg from "../assets/img/Website Portfolio.png";
import nutrifit from "../assets/img/project2.png";
import foodjournal from "../assets/img/androidapp.png";
import PIASGames from "../assets/img/PIASGames.png";
import Compiler from "../assets/img/Compiler.png";
import Gleason from "../assets/img/herro.png";
import loanrisk from "../assets/img/loanrisk.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const responsive = {

    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }

  };


  const projects = [

    {
      title: "Loan Default Risk Dashboard",
      description: "Built ML pipeline to predict loan default risk using XGBoost and neural networks, with SHAP-based explainability to interpret high-risk segments and improve model transparency.",
      imgUrl: loanrisk,
      link: "https://github.com/peter-tillmann88/loan-default-risk-model"
    },

    {
      title: "Portfolio Website",
      description: "The website you are currently viewing, built to showcase my projects and experiences.",
      imgUrl: portfolioimg,
      link: "https://peter-tillmann88.github.io/phtillmann/"
    },

    {
      title: "Nutrifit",
      description: "Built a health tracking platform for diet and exercise monitoring, enabling structured activity logging and data visualization to identify user health trends over time.",
      imgUrl: nutrifit,
      link: "https://github.com/peter-tillmann88/Nutrifit"
    },

    {
      title: "Food Journal Android App",
      description: "Built Android application for tracking food intake and exercise, allowing for structured user activity tracking.",
      imgUrl: foodjournal,
      link: "https://github.com/peter-tillmann88/Food-Journal"
    },

    {
      title: "PIAS Games",
      description: "Developed a full-stack e-commerce platform with authentication, product management, and order processing using React and Spring Boot.",
      imgUrl: PIASGames,
      link: "https://github.com/peter-tillmann88/PIASGames"
    },

    {
      title: "B-minor Compiler",
      description: "Compiler for a subset of C supporting scanning, parsing, type checking, and code generation.",
      imgUrl: Compiler,
      link: "https://github.com/peter-tillmann88/bminor_compiler"
    },

    {
      title: "Gleason Grading CNN",
      description: "Developed a CNN-based classification model for Gleason grading using PyTorch on SICAPv2 histopathology data, optimizing architecture performance across multiple training configurations.",
      imgUrl: Gleason,
      link: "https://github.com/peter-tillmann88/gleason-grading-resnet"
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

                  <p>
                    A selection of projects highlighting work in machine learning,
                    software engineering, and full-stack development.
                  </p>


                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    arrows={true}
                    className="project-slider"
                  >

                    {projects.map((project, index) => (

                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        link={project.link}
                      />

                    ))}

                  </Carousel>


                </div>

              }

            </TrackVisibility>

          </Col>

        </Row>

      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />

    </section>

  );

};