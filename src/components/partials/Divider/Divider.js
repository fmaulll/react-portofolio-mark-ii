import React from "react";
import styled from "styled-components";

const Divider = () => {
  const DividerContainer = styled.div`
    /* background-image: linear-gradient(-170deg, black, #0d0d0d, #262626); */
    background-color: black;
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  `;
  const DividerShapeTop = styled.div`
    background: linear-gradient(135deg, #fff903 2%, transparent 2%);
    height: 50px;
  `;
  const DividerShapeBottom = styled.div`
    background: linear-gradient(-45deg, #fff903 2%, transparent 2%);
    height: 50px;
  `;
  const DividerShapeCenter = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 40px;
    background: transparent;
    color: #fff903;
  `;

  const SomeText = styled.div`
    background-color: #00f0ff;
    padding: 10px;
    border: 5px solid black;
    outline: 1px solid #00f0ff;
    color: black;
    font-size: 32px;
    font-weight: bold;
    
    @media(max-width: 768px){
      font-size: 24px;
    }
  `

  return (
    <DividerContainer>
      <DividerShapeTop />
      <DividerShapeCenter>
        <SomeText>付き が きれい ですね</SomeText>
      </DividerShapeCenter>
      <DividerShapeBottom />
    </DividerContainer>
  );
};

export default Divider;
