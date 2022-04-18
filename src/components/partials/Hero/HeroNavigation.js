import React from "react";
import styled from "styled-components";

const HeroNavigation = () => {
  const NavigationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
  `;
  const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const NavigationLink = styled.a`
    margin: 0 20px;
    font-size: 32px;
    font-family: 'blender_probold';
    text-decoration: none;
    color: black;
    transition: 1;
    &::hover {
      color: white;
    }
  `;

  const NavigationHr = styled.hr`
    transform: rotate(90deg);
    width: 30px;
  `

  return (
    <NavigationWrapper>
      <NavigationContainer>
        <NavigationLink href="#">Home</NavigationLink>
        <NavigationHr/>
        <NavigationLink href="#">About</NavigationLink>
        <NavigationHr/>
        <NavigationLink href="#">Project</NavigationLink>
        <NavigationHr/>
        <NavigationLink href="#">Contact</NavigationLink>
      </NavigationContainer>
    </NavigationWrapper>
  );
};

export default HeroNavigation;
