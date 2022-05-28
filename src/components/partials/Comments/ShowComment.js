import React from "react";
import {
  CommentBox,
  CommentBoxWrapper,
  CommentContent,
  CommentDescription,
  CommentImage,
  CommentImageWrapper,
  CommentName,
} from "../../styled";

const ShowComment = (props) => {
  return (
    <CommentBoxWrapper>
      {props.comments.map((comment, index) => {
        return (
          <CommentBox key={index}>
            <CommentImageWrapper>
              <CommentImage size={50} />
            </CommentImageWrapper>
            <CommentContent>
              <CommentName>{comment.name}</CommentName>
              <CommentDescription>{comment.comment}</CommentDescription>
            </CommentContent>
          </CommentBox>
        );
      })}
    </CommentBoxWrapper>
  );
};

export default ShowComment;
