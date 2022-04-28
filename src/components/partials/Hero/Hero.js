import React from "react";
import { Container } from "react-bootstrap";
import {
  HeroDescription,
  HeroHr,
  HeroTag,
  HeroTagInnerContainer,
  HeroTitle,
  HeroWrapper,
  LineHero,
  TinyTitle,
} from "../../styled";
import SocialMedia from "./SocialMedia";
import Line from "../../assets/line.png"

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <SocialMedia/>
      <Container>
        <HeroTag>
          <HeroTagInnerContainer>
            <HeroTitle>
              Fikri Maulana Ibrahim
              <HeroHr />
            </HeroTitle>
            <HeroDescription>I am a Front-end Developer</HeroDescription>
          </HeroTagInnerContainer>
        </HeroTag>
        <TinyTitle>
          About
        </TinyTitle>
        <LineHero src={Line} />
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
