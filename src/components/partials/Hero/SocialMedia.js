import React from "react";
import styled from "styled-components";
import { imagesSource } from "../../../data/social-link";

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <SocialMediaContainer>
        {imagesSource.map((image, index) => {
          return (
            <SocialMediaItem key={index}>
              <a href={image.link} target="_blank">
                <SocialMediaSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path d={image.source} />
                </SocialMediaSvg>
              </a>
            </SocialMediaItem>
          );
        })}
      </SocialMediaContainer>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;

const SocialMediaWrapper = styled.div`
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialMediaItem = styled.div`
  margin: 15px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialMediaSvg = styled.svg`
  transition: 0.25s;
  fill: #00f0ff;
  &:hover {
    fill: white;
  }
`;
