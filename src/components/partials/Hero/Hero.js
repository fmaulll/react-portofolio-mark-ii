import React from "react";
import { Container } from "react-bootstrap";
import {
  HeroDescription,
  HeroHr,
  HeroTag,
  HeroTagInnerContainer,
  HeroTitle,
  HeroWrapper,
  JuniorSpan,
  LineHero,
  StyledContainer,
  TinyTitle,
} from "../../styled";
import SocialMedia from "./SocialMedia";
import Line from "../../assets/line.png";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <SocialMedia />
      <StyledContainer>
        {/* <Fade bottom> */}
          <HeroTag>
            <HeroTagInnerContainer>
              <HeroTitle>
                Fikri Maulana Ibrahim
                <HeroHr />
              </HeroTitle>
              <HeroDescription>
                I am a <JuniorSpan>(Entry Level)</JuniorSpan> Frontend Developer
              </HeroDescription>
            </HeroTagInnerContainer>
          </HeroTag>
        {/* </Fade> */}
        <TinyTitle>About</TinyTitle>
        <LineHero src={Line} />
      </StyledContainer>
    </HeroWrapper>
  );
};

export default Hero;
