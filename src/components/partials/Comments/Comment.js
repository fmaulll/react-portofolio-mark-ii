import React, { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import {
  CommentContainer,
  CommentTitle,
  CommentWrapper,
  FetchInfo,
  LoadCommentButton,
} from "../../styled";
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
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    fetchCommentHandler();
  }
  
  const loadCommentHandler = () => {
    fetchCommentHandler();
    setLoadButton(false);
  }

  let loadButtonShow = <LoadCommentButton onClick={loadCommentHandler}>
  Load Comment!
</LoadCommentButton>;
  let comment = <FetchInfo>No Comment Found.</FetchInfo>;

  if (getComment.length > 0) {
    comment = <ShowComment comments={getComment} />;
  }

  if (error) {
    comment = <FetchInfo>{error}</FetchInfo>;
  }

  if (isLoading) {
    comment = <FetchInfo>Loading..</FetchInfo>;
  }

  return (
    <CommentWrapper>
      <Container>
        <CommentContainer>
          <CommentTitle>Leave a Comment for Fikri!</CommentTitle>
          <AddComment onAddComment={addCommentHandler} />
          {loadButton ? loadButtonShow : ""}
          {comment}
        </CommentContainer>
      </Container>
    </CommentWrapper>
  );
};

export default Comment;
