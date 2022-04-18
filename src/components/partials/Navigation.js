import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { BlenderPro } from "../styled";

const Navigation = () => {
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
  // const NavbarLink = styled.a`
  //   padding: 0 15px;
  //   font-size: 32px;
  //   font-family: "blender_probold";
  //   text-decoration: none;
  //   color: black;
  //   transition: 1;
  //   &::hover {
  //     color: white;
  //   }
  // `;

  // const NavbarHr = styled.hr`
  //   transform: rotate(90deg);
  //   width: 30px;
  // `;

  return (
    // <Navbar>
    //   <NavbarContainerLeft>
    //     <NavbarLink href="#">Home</NavbarLink>
    //     <NavbarHr />
    //     <NavbarLink href="#">About</NavbarLink>
    //   </NavbarContainerLeft>
    //   <NavbarContainerRight>
    //     <NavbarHr />
    //     <NavbarLink href="#">Project</NavbarLink>
    //     <NavbarHr />
    //     <NavbarLink href="#">Contact</NavbarLink>
    //   </NavbarContainerRight>
    // </Navbar>
    <BlenderPro>
      <Navbar fixed="top" variant="dark" bg="black" expand="lg">
        <Container>
          <Navbar.Brand href="#" style={{ color: "#00f0ff", fontSize: "24px" }}>fmaulll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
          >
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "#00f0ff", fontSize: "24px"  }}>Home</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#00f0ff", fontSize: "24px"  }}>About</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#00f0ff", fontSize: "24px"  }}>Project</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#00f0ff", fontSize: "24px"  }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BlenderPro>
  );
};

export default Navigation;
