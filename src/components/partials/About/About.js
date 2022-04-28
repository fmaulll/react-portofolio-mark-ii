import React from "react";
import { Container } from "react-bootstrap";
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
  AboutImageContainer,
  AboutImage,
  SkillSpan,
  LineAbout,
  DownloadCV,
} from "../../styled";
import Line from "../../assets/line.png";
import Coding from "../../assets/coding.png";

const About = () => {
  return (
    <AboutWrapper id="about">
      <Container>
        <LineAbout src={Line} />
        <AboutTitle>About Me</AboutTitle>
        <AboutContainer>
          <AboutContent>
            <AboutTag>
              <AboutDescription>
                Hi! My name is Fikri Maulana Ibrahim, I am a Computer Science
                student at Binus University Bandung. At the moment, i'm working
                on deepen my skills in web development such as front-end and
                back-end to achieve my goal to become a full stack developer.
              </AboutDescription>
              <DownloadCV
                href="https://drive.google.com/file/d/1n2hr93yYjuCLZSEBSDhMgo5J0WdIpYAE/view?usp=sharing"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ marginRight: "5px", fill: "white" }}
                >
                  <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                </svg>
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
          </AboutContent>
          <AboutImageContainer>
            <AboutImage src={Coding} />
          </AboutImageContainer>
        </AboutContainer>
      </Container>
    </AboutWrapper>
  );
};

export default About;
