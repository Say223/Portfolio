import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { RiTimeLine, RiContactsBook2Line} from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand"/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto custom-nav" defaultActiveKey="#home">
            <Nav.Item className="nav-item-custom">
              <HashLink
                smooth
                to="/#home"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineHome className="icon" />
                <span>Home</span>
              </HashLink>
            </Nav.Item>

            <Nav.Item className="nav-item-custom">
              <HashLink
                smooth
                to="/#about_me"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineUser className="icon" />
                <span>About</span>
              </HashLink>
            </Nav.Item>

            <Nav.Item className="nav-item-custom">
              <HashLink
                smooth
                to="/#skills"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <BsGear className="icon" />
                <span>Skills</span>
              </HashLink>
            </Nav.Item>


            <Nav.Item className="nav-item-custom projects">
              <Nav.Link
                smooth
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineFundProjectionScreen className="icon" />
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item-custom">
              <HashLink
                smooth
                to="/#timeline"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <RiTimeLine className="icon" />
                <span>Timeline</span>
              </HashLink>
            </Nav.Item>

            <Nav.Item className="nav-item-custom">
              <HashLink
                smooth
                to="/#contact"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <RiContactsBook2Line className="icon" />
                <span>Contact</span>
              </HashLink>
            </Nav.Item>

             <Nav.Item className="nav-item-custom resume">
              <Nav.Link
                smooth
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <CgFileDocument className="icon" />
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item> 

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;