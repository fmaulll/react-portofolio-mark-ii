import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { BlenderPro } from "../styled";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  return (
    <BlenderPro>
      <Navbar fixed="top" variant="dark" bg="black" expand="lg">
        <Container>
          <NavBrand to="hero" spy={true} exact="true" activeClass="active">
            fmaulll
          </NavBrand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="about"
                offset={-60}
                spy={true}
                exact="true"
                activeClass="active"
              >
                About
              </NavLink>
              <NavLink
                to="project"
                offset={-50}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Project
              </NavLink>
              <NavLink
                to="comment"
                offset={-60}
                spy={true}
                activeClass="active"
              >
                Comment
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BlenderPro>
  );
};

export default Navigation;

// const Navbar = styled.div`
//   z-index: 0;
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   position: fixed;
//   top: 0;
// `;
// const NavbarContainerLeft = styled.div`
//   /* box-shadow: -8px 8px 5px black; */
//   padding-left: 20px;
//   height: 60px;
//   background: linear-gradient(45deg, transparent 5%, #00f0ff 5%);
//   display: flex;
//   align-items: center;
// `;
// const NavbarContainerRight = styled.div`
//   /* box-shadow: -8px 8px 5px black; */
//   padding-right: 20px;
//   height: 60px;
//   background: linear-gradient(-45deg, transparent 5%, #00f0ff 5%);
//   display: flex;
//   align-items: center;
// `;
const NavBrand = styled(LinkS)`
  padding: 5px 0;
  font-size: 30px;
  font-family: "blender_probold";
  text-decoration: none;
  color: #00f0ff;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    color: white;
    filter: drop-shadow(0px 0px 8px white);
  }
  &.active {
    border-bottom: 3px solid white;
  }
`;

const NavLink = styled(LinkS)`
  border-bottom: 3px solid transparent;
  padding: 5px 0;
  margin: 0 15px;
  font-size: 24px;
  font-family: "blender_probold";
  text-decoration: none;
  color: #00f0ff;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    color: white;
    filter: drop-shadow(0px 0px 8px white);
  }
  &.active {
    border-bottom: 3px solid white;
  }
  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
    margin: 2px 0;
  }
`;
