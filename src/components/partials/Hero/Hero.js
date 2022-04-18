import React from "react";
import { Container } from "react-bootstrap";
import {
  HeroDescription,
  HeroHr,
  HeroTag,
  HeroTagInnerContainer,
  HeroTitle,
  HeroWrapper,
} from "../../styled";
import HeroNavigation from "./HeroNavigation";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <HeroWrapper className="hero-background">
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
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
