import styled from "styled-components";
import HeroBackground from "./assets/background.png";
import AboutBackground from "./assets/aboutbackground.png";
import { AiOutlineDownload } from "react-icons/ai";

import { FaUserCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";

export const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  overflow-y: hidden;
`;

export const BlenderPro = styled.div`
  font-family: "blender_probold";
`;

export const LineHero = styled.img`
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 10px;
  height: 30px;
  transform: translate(50%, 0);
  @media (max-width: 768px) {
    height: 30px;
  }
`;
export const LineAbout = styled.img`
  position: absolute;
  top: 0;
  right: 50%;
  width: 10px;
  height: 100%;
  transform: translate(50%, 0);
  z-index: 1;
  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const TinyTitle = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50%;
  transform: translate(50%, 0);
  font-family: "blender_probook";
  color: white;
`;

export const HeroWrapper = styled.div`
  position: relative;
  font-family: "blender_probook";
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${HeroBackground});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroTag = styled.div`
  display: flex;
  max-width: 800px;
  padding: 50px;
  background: linear-gradient(-135deg, transparent 5%, #00f0ff 5%);
  color: black;
  margin-left: 8px;
  margin-bottom: 8px;
  box-shadow: -8px 8px 2px rgb(0 0 0 / 0.4);

  @media (max-width: 768px) {
    /* margin-left: 8px; */
    padding: 20px;
    max-width: 400px;
  }
`;

export const HeroTagInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "blender_probold";
  font-size: 64px;
  font-weight: bold;
  color: #3e094f;
  @media (max-width: 768px) {
    font-size: 32px;
    padding-right: 10px;
  }
`;

export const HeroHr = styled.hr`
  color: black;
  max-width: 550px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

export const JuniorSpan = styled.span`
  font-family: "blender_probook";
  color: crimson;
  font-style: italic;
  opacity: 0.8;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 24px;
  color: #3e094f;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HeroButton = styled.button``;

export const AboutWrapper = styled.div`
  background-image: url(${AboutBackground});
  background-position: bottom; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  /* background: linear-gradient(-40deg, #cf0c33 65%, crimson 35%), black; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
export const AboutTitle = styled.div`
text-align: center;
  font-family: "blender_probold";
  font-size: 32px;
  color: white;
  margin: 20px 0;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
`;

export const AboutContent = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  flex-direction: column;
  flex: 1;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    flex-direction: column;
  }
`;

export const DownloadCV = styled.a`
  font-family: "blender_probook";
  text-decoration: none;
  background: linear-gradient(90deg, #5f55af 50%, #453d83 50%), black;
  color: white;
  margin-bottom: 10px;
  width: fit-content;
  padding: 10px 15px;
  box-shadow: -4px 4px 2px rgb(0 0 0 / 0.4);
  transition: 0.25s;
  &:hover {
    color: white;
    filter: drop-shadow(0px 0px 8px white);
    box-shadow: none;
  }
`;

export const DownloadIcon = styled(AiOutlineDownload)`
  margin-right: 5px;
`;

export const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AboutTag = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(-135deg, transparent 5%, rgba(0, 0, 0, 0.14) 5%);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);
  box-shadow: -8px 8px 2px rgb(0 0 0 / 0.4);
  padding: 30px;
  padding-right: 70px;
  color: white;
  width: fit-content;
  margin-left: 8px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const AboutDescription = styled.p`
  font-family: "blender_probook";
  font-size: 20px;
  max-width: 700px;
`;

export const SkillBox = styled.div`
  margin-top: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(-135deg, transparent 5%, rgba(0, 0, 0, 0.14) 5%);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);
  box-shadow: -8px 8px 2px rgb(0 0 0 / 0.4);
  color: white;
  margin-left: 8px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const SkillContent = styled.div`
  margin-bottom: 10px;
`;

export const SkillTitle = styled.h4`
  font-family: "blender_probold";
`;

export const SkillSpan = styled.span`
  font-family: "blender_probook";
  color: black;
  font-style: italic;
  opacity: 0.8;
`;

export const SkillGrid = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
`;

export const SkillDescription = styled.p`
  font-family: "blender_probook";
`;

export const CommentWrapper = styled.div`
  background: linear-gradient(-135deg, #262626 60%, #1c1c1c 40%), #fff700;
  width: 100%;
  padding-bottom: 30px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const CommentTitle = styled.div`
  font-family: "blender_probold";
  font-size: 32px;
  color: white;
  margin: 20px 0;
`;

export const LoadCommentButton = styled.div`
  margin: 20px;
  font-family: "blender_probook";
  text-decoration: none;
  background: linear-gradient(90deg, #cf0c33 50%, crimson 50%), black;
  color: white;
  width: fit-content;
  padding: 10px 20px;
  box-shadow: -6px 6px 2px rgb(0 0 0 / 0.4);
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    color: white;
    filter: drop-shadow(0px 0px 8px white);
    box-shadow: none;
  }
`;

export const CommentBoxWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(-135deg, transparent 3%, crimson 3%);
  box-shadow: -8px 8px 2px rgb(0 0 0 / 0.4);
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const CommentImageWrapper = styled.div``;

export const CommentImage = styled(FaUserCircle)`
  color: black;
  margin-right: 10px;
`;

export const CommentContent = styled.div`
  margin-left: 10px;
  width: 100%;
  color: black;
`;

export const CommentName = styled.div`
  font-family: "blender_probold";
  font-size: 20px;
`;

export const CommentDescription = styled.div`
  font-family: "blender_probook";
`;

export const CommentForm = styled.form`
  width: 100%;
  background: linear-gradient(
    -135deg,
    transparent 5%,
    rgba(255, 255, 255, 0.07) 5%
  );
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  box-shadow: -16px 8px 2px rgb(0 0 0 / 0.4);
  color: white;
  padding: 30px;
  margin-bottom: 30px;
  margin-left: 16px;
`;

export const CommentFormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentFormLabel = styled.label`
  font-size: 20px;
  font-family: "blender_probold";
`;

export const CommentAlert = styled.p`
  font-family: "blender_probook";
  color: red;
  margin: 0;
`;

export const CommentFormInput = styled.input`
  font-family: "blender_probook";
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  background-color: transparent;
  color: white;
`;

export const CommentFormTextArea = styled.textarea`
  border: 1px solid ${(props) => (props.emptyComment ? "red" : "none")};
  font-family: "blender_probook";
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  outline: none;
  height: 100px;
`;

export const CommentFormButton = styled.button`
  margin-top: 10px;
  font-family: "blender_probook";
  text-decoration: none;
  background: linear-gradient(90deg, #cf0c33 50%, crimson 50%), black;
  color: white;
  margin-bottom: 10px;
  width: fit-content;
  padding: 10px 20px;
  box-shadow: -4px 4px 2px rgb(0 0 0 / 0.4);
  border: none;
  transition: 0.25s;
  &:hover {
    color: white;
    filter: drop-shadow(0px 0px 8px white);
    box-shadow: none;
  }
`;

export const FetchInfo = styled.div`
  color: white;
  margin-bottom: 10px;
`;
