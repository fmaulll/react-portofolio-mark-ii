import React from "react";
import { Container } from "react-bootstrap";
import  Fade  from "react-reveal/Fade";
import {
  AboutContainer,
  AboutTitle,
  AboutWrapper,
  SkillBox,
  SkillTitle,
  SkillContent,
  SkillDescription,
  SkillGrid,
  AboutTag,
  AboutDescription,
  AboutContent,
  SkillSpan,
  DownloadCV,
  DownloadIcon,
} from "../../styled";

const About = () => {
  return (
    <AboutWrapper id="about">
      <Container>
        <AboutContainer>
          <AboutContent>
            {/* <Fade left cascade> */}
              <AboutTitle>About Me</AboutTitle>
              <AboutTag>
                <AboutDescription>
                  Hi! My name is Fikri Maulana Ibrahim, I am a Computer Science
                  student at Binus University Bandung. At the moment, i'm
                  working on deepen my skills in web development such as
                  front-end and back-end to achieve my goal to become a full
                  stack developer.
                </AboutDescription>
                <DownloadCV
                  href="https://drive.google.com/file/d/1n2hr93yYjuCLZSEBSDhMgo5J0WdIpYAE/view?usp=sharing"
                  target="_blank"
                >
                  <DownloadIcon size="25px" />
                  Download CV!
                </DownloadCV>
              </AboutTag>
              <SkillBox>
                <SkillContent>
                  <SkillTitle>Skills</SkillTitle>
                  <SkillGrid>
                    <SkillDescription>HTML</SkillDescription>
                    <SkillDescription>CSS</SkillDescription>
                    <SkillDescription>JavaScript</SkillDescription>
                    <SkillDescription>PHP</SkillDescription>
                    <SkillDescription>React</SkillDescription>
                    <SkillDescription>Next.js</SkillDescription>
                    <SkillDescription>Laravel</SkillDescription>
                    <SkillDescription>Node.js</SkillDescription>
                  </SkillGrid>
                </SkillContent>
                <SkillContent>
                  <SkillTitle>Languages</SkillTitle>
                  <SkillGrid>
                    <SkillSpan>Native</SkillSpan>
                    <SkillSpan>Intermediate</SkillSpan>
                    <SkillSpan>Basic</SkillSpan>
                    <SkillDescription>Bahasa</SkillDescription>
                    <SkillDescription>English</SkillDescription>
                    <SkillDescription>Japanese</SkillDescription>
                  </SkillGrid>
                </SkillContent>
                <SkillContent>
                  <SkillTitle>Hobbies</SkillTitle>
                  <SkillGrid>
                    <SkillDescription>play games</SkillDescription>
                    <SkillDescription>watch anime</SkillDescription>
                    <SkillDescription>sleep</SkillDescription>
                    <SkillDescription>read manga</SkillDescription>
                    <SkillDescription>sipping coffee</SkillDescription>
                    <SkillDescription>whatever</SkillDescription>
                  </SkillGrid>
                </SkillContent>
              </SkillBox>
            {/* </Fade> */}
          </AboutContent>
        </AboutContainer>
      </Container>
    </AboutWrapper>
  );
};

export default About;
