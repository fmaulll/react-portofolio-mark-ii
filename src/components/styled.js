import styled from "styled-components";

export const BlenderPro = styled.div`
  font-family: "blender_probold";
`;

export const HeroWrapper = styled.div`
  position: relative;
  font-family: "blender_probook";
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(-135deg, #1c1c1c 70%, #262626 30%), #fff700;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroTag = styled.div`
  width: 800px;
  padding: 50px;
  box-shadow: -8px 8px 0 black;
  background: linear-gradient(-135deg, transparent 5%, #00f0ff 5%);
  color: black;

  @media (max-width: 768px) {
    margin-left: 8px;
    padding: 15px 10px;
    width: 350px;
  }
`;

export const HeroTagInnerContainer = styled.div`
  margin-left: 50px;
  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "blender_probold";
  font-size: 64px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HeroHr = styled.hr`
  width: 550px;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HeroButton = styled.button``;

export const AboutWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  background: linear-gradient(-40deg, #cf0c33 65%, crimson 35%), black;
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `;

export const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  `;

export const AboutImage = styled.img`
  padding: 0 150px 100px 150px;
  fill: white;
  `;

export const AboutTag = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(-135deg, transparent 5%, #00f0ff 5%);
  box-shadow: -8px 8px 0 black;
  padding: 30px;
  transition: 0.25s;
  
  &:hover {
    background-color: white;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
  `;

export const AboutDescription = styled.p`
  font-family: "blender_probook";
  font-size: 20px;
  `;

export const SkillBox = styled.div`
  margin-top: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #00f0ff;
  box-shadow: -8px 8px 0 black;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
  `;
export const SkillContent = styled.div``;

export const SkillTitle = styled.h3`
  font-family: "blender_probold";
  `;

export const SkillSpan = styled.span`
  font-family: "blender_probook";
  color: crimson;
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
  padding-bottom: 30px;
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
  font-family: "blender_probold";
  font-size: 24px;
  background-color: #00f0ff;
  padding: 10px;
  border: 5px solid black;
  margin-bottom: 30px;
  transition: 0.25s;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: white;
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
  box-shadow: -8px 8px 0 black;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const CommentImage = styled.div`
  margin-right: 10px;
`;

export const CommentContent = styled.div`
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
  background: linear-gradient(-135deg, transparent 5%, #00f0ff 5%);
  box-shadow: -8px 8px 0 black;
  padding: 30px;
  margin-bottom: 30px;
`;

export const CommentFormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentFormLabel = styled.label`
  font-size: 20px;
  font-family: "blender_probold";
`;

export const CommentFormInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background-color: transparent;
`;

export const CommentFormTextArea = styled.textarea`
  border: none;
  outline: none;
  height: 100px;
`;

export const CommentFormButton = styled.button`
  margin-top: 10px;
  font-family: "blender_probold";
  font-size: 24px;
  text-align: center;
  padding: 10px;
  transition: 0.25s;
  background-color: white;
  color: black;
  border: 5px solid black;
  
  &:hover {
    background-color: black;
    color: white;
    border: 5px solid white;

  }
`;

export const FetchInfo = styled.div`
color: white;
margin-bottom: 10px;
`