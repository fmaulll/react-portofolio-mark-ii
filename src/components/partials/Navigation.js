import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { BlenderPro } from "../styled";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Fade from "react-reveal/Fade";

const Navigation = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const mobileMenu = (
    <MobileNavbarWrapper>
      <Container>
        <MobileNavbarContainer>
          <NavLink
            to="hero"
            offset={-70}
            spy={true}
            exact="true"
            activeClass="active"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            offset={-70}
            spy={true}
            exact="true"
            activeClass="active"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            About
          </NavLink>
          <NavLink
            to="project"
            offset={-70}
            spy={true}
            exact="true"
            activeClass="active"
            onClick={() => alert("coming soon!")}
          >
            Project
          </NavLink>

          <NavLink
            to="comment"
            offset={-70}
            spy={true}
            activeClass="active"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Comment
          </NavLink>
          <NavLinkSecret href="https://cekih.vercel.app">
            Cekih
          </NavLinkSecret>
        </MobileNavbarContainer>
      </Container>
    </MobileNavbarWrapper>
  );

  const hamburgerButton = (
    <HamburgerMenu
      size="40px"
      onClick={() => {
        setOpenMenu(true);
      }}
    />
  );

  const closeButton = (
    <CloseMenu
      size="40px"
      color="white"
      onClick={() => {
        setOpenMenu(false);
      }}
    />
  );

  return (
    <BlenderPro>
      <NavbarContainer scrollNav={scrollNav} fixed="top">
        <StyledContainer>
          <Fade bottom>
            <NavBrand to="hero" spy={true} exact="true" activeClass="active">
              fmaulll
            </NavBrand>
            <NavContainer>
              <NavLink
                to="hero"
                offset={-70}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                offset={-70}
                spy={true}
                exact="true"
                activeClass="active"
              >
                About
              </NavLink>
              <NavLink
                to="project"
                offset={-70}
                spy={true}
                exact="true"
                activeClass="active"
                onClick={() => alert("coming soon!")}
                >
                Project
              </NavLink>
              <NavLink
                to="comment"
                offset={-70}
                spy={true}
                exact="true"
                activeClass="active"
              >
                Comment
              </NavLink>
            </NavContainer>
          </Fade>
        </StyledContainer>
      </NavbarContainer>
      <MobileMenuWrapper scrollNav={scrollNav}>
        <StyledContainer>
          <Fade bottom>
            <MobileMenuContainer>
              <NavBrand to="hero" spy={true} exact="true" activeClass="active">
                fmaulll
              </NavBrand>
              {!openMenu ? hamburgerButton : closeButton}
            </MobileMenuContainer>
          </Fade>
          {openMenu ? mobileMenu : ""}
        </StyledContainer>
      </MobileMenuWrapper>
    </BlenderPro>
  );
};

export default Navigation;

const MobileMenuWrapper = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.5s;
  background-color: ${(props) =>
    props.scrollNav ? "rgba(185, 185, 185, 0.09)" : "transparent"};
  box-shadow: ${(props) =>
    props.scrollNav
      ? "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px"
      : "0px 0px transparent"};
  backdrop-filter: ${(props) => (props.scrollNav ? "blur(13.7px)" : "none")};
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerMenu = styled(BiMenuAltRight)`
  color: white;
`;
const CloseMenu = styled(IoClose)``;

const MobileNavbarWrapper = styled.div`
max-height: 80px;
`;
const MobileNavbarContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavbarContainer = styled(Navbar)`
  transition: 0.5s;
  background-color: ${(props) =>
    props.scrollNav ? "rgba(185, 185, 185, 0.09)" : "transparent"};
  box-shadow: ${(props) =>
    props.scrollNav
      ? "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px"
      : "0px 0px transparent"};
  backdrop-filter: ${(props) => (props.scrollNav ? "blur(13.7px)" : "none")};
  height: 70px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledContainer = styled(Container)`
  overflow-y: hidden;
`;

const NavContainer = styled(Nav)`
  display: flex;
  flex-direction: row;
`;
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
  color: white;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    color: white;
    filter: drop-shadow(0px 0px 8px white);
  }
`;

const NavLink = styled(LinkS)`
  border-bottom: 3px solid transparent;
  padding: 5px 0;
  margin: 0 15px;
  font-size: 24px;
  font-family: "blender_probold";
  text-decoration: none;
  color: white;
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
const NavLinkSecret = styled.a`
  border-bottom: 3px solid transparent;
  padding: 5px 0;
  margin: 0 15px;
  font-size: 24px;
  font-family: "blender_probold";
  text-decoration: none;
  color: white;
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
