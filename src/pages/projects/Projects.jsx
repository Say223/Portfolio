import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import ProjectCardEffect from "../../components/ProjectCardEffect";


import PACMAN from "../../assets/imgs/projects/Anem1.png";
import PianoTiles from "../../assets/imgs/projects/interface_lecteur.png";

import W2PDF from "../../assets/imgs/projects/dzvues.png";

import MiasPortfolio from "../../assets/imgs/projects/e-plan.png";
import ResumeBuilder from "../../assets/imgs/projects/e-admin.png";

import LaTexResume from "../../assets/imgs/projects/e-prof.png";


function Projects() {
  useEffect(() => {
    ProjectCardEffect('.project-card');
  }, []);
  
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
            PROJECT
          </h1> <br /> <br />
            <Particle />
            <Container>
              <h2>Projects</h2>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={MiasPortfolio}
                      isBlog={false}
                      title="E-Plan"
                      description="A user-friendly web application for students to easily access and view their exam schedules. Designed to provide a seamless experience, this platform ensures students stay informed about their exam dates and times."
                      ghLink="https://github.com/Say223/Exam-Schedules-web-application.git"
                      demoLinks={["https://e-plan-students.vercel.app/"]}
                      demoName="Demo"
                    />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={LaTexResume}
                    isBlog={false}
                    title="E-Prof"
                    description="A dedicated platform for teachers to submit their availability and assist in exam scheduling. This tool bridges the gap between faculty and administration, ensuring effective coordination."
                    ghLink="https://github.com/Say223/E-Prof.git"
                    demoLinks={["https://e-plan-prof.vercel.app/"]}
                    demoName="Demo"
                    
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={ResumeBuilder}
                    isBlog={false}
                    title="E-Admin"
                    description="A powerful web application for university administrators to manage exam schedules across all departments. Designed to simplify the scheduling process, this tool ensures efficient communication between administrators, teachers, and students."
                    ghLink="https://github.com/Say223/E-Admin.git"
                    demoLinks={["https://e-plan-admin.vercel.app/login"]}
                    demoName="Demo"

                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={W2PDF}
                    isBlog={false}
                    title="DzVues-Employes"
                    description="The 'Employee Management' repository is dedicated to the employee-side desktop application of a national magazine management system, developed using Java. This application enables employees to efficiently interact with the system, manage their tasks, access schedules, submit content, and collaborate with other team members to ensure seamless magazine production."
                    ghLink="https://github.com/Say223/DzVues---Employes.git"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={PianoTiles}
                    isBlog={false}
                    title="DzVues-Readers"
                    description="The 'Readers' repository is dedicated to the reader-side desktop application of the national magazine management system, developed using Java. This application provides readers with an intuitive platform to browse, purchase, and access digital magazines, explore featured content, and stay updated with the latest publications."
                    ghLink="https://github.com/Say223/DzVues-Lecteurs.git"
                   
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={PACMAN}
                    isBlog={false}
                    title="Anemcare"
                    description="ANEMCARE is a mobile app dedicated to helping anemia patients manage their health effectively. It offers tools to track hemoglobin levels, personalized nutrition plans to improve their diet, and a seamless system to book appointments with specialized doctors, ensuring holistic and tailored care for better health outcomes."
                   
                  />
                </Col>

               

              

                

               

                
                
                
              </Row>

              
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                
                
                
              </Row>
          </Container>
    </Container>
  );
}

export default Projects;
