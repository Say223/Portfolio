import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import Particle from "../../components/Particle";
import Type from "./Type";
import Github from "./github/Github";
import ProgrammingLangStack from "./skills/ProgrammingLangStack";
import FrameworkStack from "./skills/FrameworkStack";
import DatabaseStack from "./skills/DatabaseStack";
import WebDevStack from "./skills/WebDevStack";
import ToolStack from "./skills/ToolStack";
import OtherStack from "./skills/OtherStack";
import ProjectCard from "../projects/ProjectCards";
import ProjectCardEffect from "../../components/ProjectCardEffect";
import EnhancedSkillsSection from "./skills/EnhancedSkillStack";


import UWMadisonDiploma from "../../assets/diploma/UW-Madison Diploma.pdf";

import UWMadisonProfilePicture from "../../assets/imgs/profile.png";
;

import Lumen from "../../assets/imgs/timeline/techinst.png";

import BadgerCS from "../../assets/imgs/badger_cs.png";

import ResumeBuilder from "../../assets/imgs/projects/e-plan.png";
import VHR from "../../assets/imgs/projects/interface_lecteur.png";
import CS571 from "../../assets/imgs/projects/dzvues.png";
import CS407 from "../../assets/imgs/projects/e-prof.png";
import CS506 from "../../assets/imgs/projects/Anem1.png";

import MiasPortfolio from "../../assets/imgs/projects/e-admin.png";


function Home() {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // const [showCUDiplomaModal, setShowCUDiplomaModal] = useState(false);
  const [showUWMadisonDiplomaModal, setShowUWMadisonDiplomaModal] = useState(false);
  // const [isCUDiplomaPreviewVisible, setIsCUDiplomaPreviewVisible] = useState(false);
  const [isUWMadisonDiplomaPreviewVisible, setIsUWMadisonDiplomaPreviewVisible] = useState(false);
  // const showCUDiplomaPreview = () => setIsCUDiplomaPreviewVisible(true);
  // const hideCUDiplomaPreview = () => setIsCUDiplomaPreviewVisible(false);
  const showUWMadisonDiplomaPreview = () => setIsUWMadisonDiplomaPreviewVisible(true);
  const hideUWMadisonDiplomaPreview = () => setIsUWMadisonDiplomaPreviewVisible(false);
  // const handleCUDiplomaModalClose = () => setShowCUDiplomaModal(false);
  // const handleCUDiplomaModalShow = () => setShowCUDiplomaModal(true);
  const handleUWMadisonDiplomaModalClose = () => setShowUWMadisonDiplomaModal(false);
  const handleUWMadisonDiplomaModalShow = () => setShowUWMadisonDiplomaModal(true);

  const [isResumePreviewVisible, setIsResumePreviewVisible] = useState(false);
  const showResumePreview = () => setIsResumePreviewVisible(true);
  const hideResumePreview = () => setIsResumePreviewVisible(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        ProjectCardEffect('.home-header');
        ProjectCardEffect('.home-logo');
        ProjectCardEffect('.home-about-description');
        ProjectCardEffect('.myAvatar');
        ProjectCardEffect('.project-card');
        ProjectCardEffect('.tech-icons');
      }, 1200);

      return () => clearTimeout(timer);
  }, []);

  return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hell0{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Meziane Yasmine </strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} className="home-logo" style={{ paddingBottom: 20 }}>
                <img
                  src={ UWMadisonProfilePicture }
                  alt="profile picture"
                  className="img-fluid"
                  style={{ maxHeight: "350px", marginLeft: "140px"}}
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="home-about-section" id="about_me">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>ABOUT ME</h1>
                {/* Graduate Master Student Version */}
                {/* <p className="home-about-body">
                  Currently, I'm pursuing my master's in Computer Science at <span onMouseEnter={showCUDiplomaPreview} onMouseLeave={hideCUDiplomaPreview} onClick={handleCUDiplomaModalShow} style={{ textDecoration: 'none', cursor: 'pointer', color: '#348EDE' }}>Columbia University</span>. 
                  {isCUDiplomaPreviewVisible && (
                    <div className="img-preview">
                      <img src={UWMadisonDiplomaPreview} alt="Diploma Preview" style={{ width: '100px', height: 'auto' }}/>
                    </div>
                  )} Previously, I earned my bachelor's degree in Computer Science & Data Science from the <span onMouseEnter={showUWMadisonDiplomaPreview} onMouseLeave={hideUWMadisonDiplomaPreview} onClick={handleUWMadisonDiplomaModalShow} style={{ textDecoration: 'none', cursor: 'pointer', color: '#C5050C' }}>University of Wisconsin - Madison</span>.
                  {isUWMadisonDiplomaPreviewVisible && (
                    <div className="img-preview">
                      <img src={UWMadisonDiplomaPreview} alt="Diploma Preview" style={{ width: '100px', height: 'auto' }}/>
                    </div>
                  )}
                  <br /> <br />
                  Ever since I was young, programming have been something that I am passionate doing.
                  I have been trying to code various of applications and platforms, including web development, application development, and data analyst.
                  I would like to utilize my skills as a Software Developer to create applications that can help the people in need.
                  <br />
                </p> */}

                {/* Master Student Version */}
                {/* <p className="home-about-body">
                  Currently, I'm pursuing my master's in Computer Science at <a href="https://www.columbia.edu/" target="blank" style={{ textDecoration: 'none', color: '#348EDE' }}>Columbia University</a>. 
                  Previously, I earned my bachelor's degree in Computer Science & Data Science from the <span onMouseEnter={showDiplomaPreview} onMouseLeave={hideDiplomaPreview} onClick={handleDiplomaModalShow} style={{ textDecoration: 'none', cursor: 'pointer', color: '#C5050C' }}>University of Wisconsin - Madison</span>.
                  {isUWMadisonDiplomaPreviewVisible && (
                    <div className="img-preview">
                      <img src={UWMadisonDiplomaPreview} alt="Diploma Preview" style={{ width: '100px', height: 'auto' }}/>
                    </div>
                  )}
                  <br /> <br />
                  Ever since I was young, programming have been something that I am passionate doing.
                  I have been trying to code various of applications and platforms, including web development, application development, and data analyst.
                  I would like to utilize my skills as a Software Developer to create applications that can help the people in need.
                  <br />
                </p> */}

                {/* Undergrad Student Version */}
                <p className="home-about-body">
                  {/* I recently earned my bachelor's degree in Computer Science & Data Science from the <span onMouseEnter={showUWMadisonDiplomaPreview} onMouseLeave={hideUWMadisonDiplomaPreview} onClick={handleUWMadisonDiplomaModalShow} style={{ textDecoration: 'none', cursor: 'pointer', color: '#C5050C' }}>University of Wisconsin - Madison</span>.
                  {isUWMadisonDiplomaPreviewVisible && (
                    <div className="img-preview">
                      <img src={UWMadisonDiplomaPreview} alt="Diploma Preview" style={{ width: '100px', height: 'auto' }}/>
                    </div>
                  )}
                  <br /> <br /> */}
                  Étudiante en Master 2 Génie Logiciel, je suis passionnée par le développement web et l'innovation numérique. Mon objectif est de devenir développeuse web, acquérir une solide expérience professionnelle, et, à terme, créer ma propre entreprise informatique pour concevoir des solutions numériques innovantes. Mes compétences incluent la conception de sites web dynamiques, la gestion de projets logiciels et une forte capacité à transformer des idées technologiques en projets concrets. Je suis motivée par l'envie de relever des défis et de proposer des outils pratiques et durables qui répondent aux besoins des entreprises modernes. Découvrez mon portfolio pour explorer mes réalisations et ma vision pour l'avenir du numérique !
                  <br />
                </p>

                {/* <Col md={4}>
                  <a className="primary_btn" href={Resume} style={{ textDecoration: 'none' }}> <span onMouseEnter={showResumePreview} onMouseLeave={hideResumePreview}>Download resume</span> </a>
                  {isResumePreviewVisible && (
                    <div className="img-preview">
                      <img src={ResumePreview} alt="Resume Preview" style={{ width: '100px', height: 'auto' }}/>
                    </div>
                  )}
                </Col> */}
              </Col>

              <Col md={4} className="myAvatar">
                <Tilt>
                  <img src={BadgerCS} alt="avatar" className="img-fluid"/>
                </Tilt>
              </Col>
            </Row>
          </Container>
      </Container>
      
      {/* <Modal show={showCUDiplomaModal} onHide={handleCUDiplomaModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>My Columbia University Diploma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pdf-viewer-container">
            {currentPage > 1 && (
              <AiOutlineLeft className="pdf-nav-arrow left-arrow" onClick={goToPreviousPage} />
            )}
            <Document file={CUDiploma} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={currentPage} />
            </Document>
            {currentPage < numPages && (
              <AiOutlineRight className="pdf-nav-arrow right-arrow" onClick={goToNextPage} />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCUDiplomaModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Modal show={showUWMadisonDiplomaModal} onHide={handleUWMadisonDiplomaModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>My UW-Madison Diploma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pdf-viewer-container">
            {currentPage > 1 && (
              <AiOutlineLeft className="pdf-nav-arrow left-arrow" onClick={goToPreviousPage} />
            )}
            <Document file={UWMadisonDiploma} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={currentPage} />
            </Document>
            {currentPage < numPages && (
              <AiOutlineRight className="pdf-nav-arrow right-arrow" onClick={goToNextPage} />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUWMadisonDiplomaModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={showDiplomaModal} onHide={handleDiplomaModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>My UW-Madison Diploma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pdf-viewer-container">
            {currentPage > 1 && (
              <AiOutlineLeft className="pdf-nav-arrow left-arrow" onClick={goToPreviousPage} />
            )}
            <Document file={UWMadisonDiploma} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={currentPage} />
            </Document>
            {currentPage < numPages && (
              <AiOutlineRight className="pdf-nav-arrow right-arrow" onClick={goToNextPage} />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDiplomaModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

      <EnhancedSkillsSection
        ProgrammingLangStack={ProgrammingLangStack}
        WebDevStack={WebDevStack}
        FrameworkStack={FrameworkStack}
        DatabaseStack={DatabaseStack}
        ToolStack={ToolStack}
        OtherStack={OtherStack}
        Github={Github}
      />

        <Container>
          <h1 className="project-heading">
            PROJECT
          </h1> <br /> <br />
            <Particle />
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={MiasPortfolio}
                      isBlog={false}
                      title="E-Plan"
                      ghLink="https://github.com/Say223/Exam-Schedules-web-application.git"
                      demoLinks={[ "https://e-plan-students.vercel.app/" ]}
                      demoName="Demo"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={CS407}
                      isBlog={false}
                      title="E-Prof"
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
                      ghLink="https://github.com/Say223/E-Admin.git"
                      demoLinks={["https://e-plan-admin.vercel.app/login"]}
                     demoName="Demo"
                    />
                  </Col>

                  <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={CS571}
                      isBlog={false}
                      title="DzVues-Employes"
                      ghLink="https://github.com/Say223/DzVues---Employes.git"
                    />
                  </Col>

                  <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={VHR}
                      isBlog={false}
                      title="DzVues-Readers"
                      ghLink="https://github.com/Say223/DzVues-Lecteurs.git"
                    />
                  </Col>

                  <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={CS506}
                      isBlog={false}
                      title="Anemcare"
                     
                    />
                  </Col>

                 
                 
              </Row>
              <div className="container text-center mt-5">
                <h2>To visit more of my projects</h2> 
                <a href="https://github.com/Say223" className="btn btn-xl btn-dark" target="blank">Visit My GitHub &nbsp; <IoLogoGithub />  </a>
              </div>
          </Container>
        </Container> <br /> <br /> <br />

        <Container id="timeline">
          <h1 className="project-heading">
              TIMELINE
          </h1> <br /> <br />
          <VerticalTimeline lineColor="#F5F5F5">
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                dateClassName="blue"
                date="January 2025 - Present"
                contentStyle={{ border: '#accce6', boxShadow: '4px 5px 4px 3px #FFCBD8' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFCBD8' }}
                iconStyle={{ background: '#FFCBD8', color: '#fff' }}
                position="right"
                icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <a href="https://www.tiktok.com/about" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">TikTok</h4> </a>
              <a href="https://www.tiktok.com/about"> <img className="vertical-timeline-element-image" src={TikTok} width={140} height={140} alt="TikTok"/> </a>
              <h4 className="vertical-timeline-element-subtitle">San Jose, CA</h4>
              <p>
                <b>Advertisement Team</b>
                <br/>

              </p>
            </VerticalTimelineElement> */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="blue"
              date="October 2024 - June 2025"
              contentStyle={{ border: '#accce6', boxShadow: '4px 5px 4px 3px #FFCBD8' }}
              contentArrowStyle={{ borderRight: '7px solid  #FFCD8' }}
              iconStyle={{ background: '#FFCBD8', color: '#fff' }}
              position="left"
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">Stage chez Tech Instinct</h3>
            
              <a href="https://tech-instinct.com/"> <img className="vertical-timeline-element-image" src={Lumen} width={140} height={140} alt="Lumen"/> </a>
              <h4 className="vertical-timeline-element-subtitle">Bejaia,Algeria</h4>
              <p>
                <b>-----------------------------------------------</b>
                <br/>
                  Development of a Proof of Concept (POC) for an innovative SaaS platform dedicated to sheep farming management, featuring both a web and mobile interface. The project involved designing and implementing core functionalities for efficient livestock tracking, resource management, and health monitoring. A user-friendly web interface was developed for administrators to oversee operations, while a mobile application was created for farmers to input data on the go, including feeding schedules, medical treatments, and breeding records. 
              </p>
            </VerticalTimelineElement>

           

          </VerticalTimeline>
        </Container>  <br /> <br /> <br />

        <Container className="contact_info py-5" id="contact" style={{ backgroundColor: '#FFCBDB', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}>
  <h1 className="project-heading text-center mb-4 text-black" style={{ color: 'black', fontWeight: 'bold' }}>
    CONTACT
  </h1>
  <Row className="info_item justify-content-center text-dark">
    <Col xs={12} md={8}>
      <div className="contact-card p-4" style={{ backgroundColor: 'black', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <h4 className="mb-3">
          <AiOutlineMail style={{ color: '#FFCBDB', marginRight: '8px' }} />
          <a href="mailto:yasminemeziane26@gmail.com" className="text-decoration-none" style={{ color: '#FFCBDB' }}>yasminemeziane26@gmail.com</a> 
          <span style={{ margin: '0 8px' }}></span> 
        
        </h4>
        
        <h4>
          <AiFillGithub style={{ color: '#FFCBDB', marginRight: '8px' }} />
          <a href="https://github.com/Say223" className="text-decoration-none" style={{ color: '#FFCBDB' }}>github.com/Say223</a>
        </h4>
      </div>
    </Col>
  </Row>
</Container>

    </section>
  );
}

export default Home;