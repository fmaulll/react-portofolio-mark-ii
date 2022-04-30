import React from "react";
import styled from "styled-components";
import GridLoader from "react-spinners/GridLoader";

const Loader = (props) => {
  return (
    <LoaderContainer>
      <GridLoader color="#ffffff" loading={props.onLoading} size={100} />
    </LoaderContainer>
  );
};

export default Loader;

export const LoaderContainer = styled.div`
  background: linear-gradient(-40deg, #cf0c33 65%, crimson 35%), black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
