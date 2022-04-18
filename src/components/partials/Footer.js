import React from "react";
import styled from "styled-components";
import { imagesSource } from "../../data/social-link";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {imagesSource.map((image, index) => {
          return (
            <FooterSocialContainer key={index}>
              <a href={image.link} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d={image.source} />
                </svg>
              </a>
            </FooterSocialContainer>
          );
        })}
      </FooterContainer>
      <FooterCopyright>&copy; 2022 Fikri Maulana Ibrahim</FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

const FooterSocialContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 5px;
  fill: white;
`;

const FooterCopyright = styled.div`
  font-family: "blender_probook";
  color: white;
`;
