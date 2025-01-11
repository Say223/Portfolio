import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © 2024 - {year} Yasmine Meziane</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Say_223"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
