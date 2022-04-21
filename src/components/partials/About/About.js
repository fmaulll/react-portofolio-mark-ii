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
} from "../../styled";

const About = () => {
  return (
    <AboutWrapper id="about">
      <Container>
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
            <AboutImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2021/png/iconmonstr-bed-5.png&r=255&g=255&b=255" />
          </AboutImageContainer>
        </AboutContainer>
      </Container>
    </AboutWrapper>
  );
};

export default About;
