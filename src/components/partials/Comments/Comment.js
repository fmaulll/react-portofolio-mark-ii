import React, { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import {
  CommentContainer,
  CommentTitle,
  CommentWrapper,
  ErrorContainer,
  FetchInfo,
  LoadCommentButton,
} from "../../styled";
import styled from "styled-components";
import AddComment from "./AddComment";
import ShowComment from "./ShowComment";

const Comment = () => {
  const [getComment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadButton, setLoadButton] = useState(true);

  const fetchCommentHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://lifecommends-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json"
      );
      if (!response.ok) {
        throw new Error("Something wen wrong!");
      }

      const data = await response.json();

      const loadedComments = [];

      for (const key in data) {
        loadedComments.push({
          id: key,
          name: data[key].name,
          comment: data[key].comment,
        });
      }
      //   setComment(data.results);
      setComment(loadedComments);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  async function addCommentHandler(comment) {
    const response = await fetch(
      "https://lifecommends-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json",
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
        },
      }
    );
    const data = await response.json();
    fetchCommentHandler();
  }

  const loadCommentHandler = () => {
    fetchCommentHandler();
    setLoadButton(false);
  };

  let loadButtonShow = (
    <LoadCommentButton onClick={loadCommentHandler}>
      Load Comment!
    </LoadCommentButton>
  );
  let comment = <FetchInfo>No Comment Found.</FetchInfo>;

  if (getComment.length > 0) {
    comment = <ShowComment comments={getComment} />;
  }

  if (error) {
    comment = (
      <ErrorContainer>
        {loadButtonShow}
        <FetchInfo>{error}</FetchInfo>;
      </ErrorContainer>
    );
  }

  if (isLoading) {
    comment = <FetchInfo>Loading..</FetchInfo>;
  }

  return (
    <CommentWrapper id="comment">
      <StyledContainer>
        <Fade left>
          <CommentContainer>
            <CommentTitle>Leave a Comment for Fikri!</CommentTitle>
            <AddComment onAddComment={addCommentHandler} />
            {loadButton ? loadButtonShow : ""}
            {comment}
          </CommentContainer>
        </Fade>
      </StyledContainer>
    </CommentWrapper>
  );
};

export default Comment;

const StyledContainer = styled(Container)`
  overflow-y: hidden;
  height: auto;
`;
