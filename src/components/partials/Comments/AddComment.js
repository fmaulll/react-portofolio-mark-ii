import React, { useRef, useState } from "react";
import {
  CommentAlert,
  CommentForm,
  CommentFormButton,
  CommentFormControl,
  CommentFormInput,
  CommentFormLabel,
  CommentFormTextArea,
} from "../../styled";

const AddComment = (props) => {
  const [getNameValue, setNameValue] = useState("");
  const [getCommentValue, setCommentValue] = useState("");
  const [emptyComment, setEmptyComment] = useState(false)
  const nameRef = useRef();
  const commentRef = useRef();

  const nameChangeHandler = (e) => {
    setNameValue(e.target.value);
  };
  const commentChangeHandler = (e) => {
    setCommentValue(e.target.value);
  };

  const submitCommentHandler = (event) => {
    if (getCommentValue === "") {
      // alert("comment can't be empty!");
      setEmptyComment(true)
      event.preventDefault();
    } else {
      const comment = {
        name: getNameValue === "" ? "anonymous" : getNameValue,
        comment: getCommentValue,
      };
      setNameValue("");
      setCommentValue("");
      props.onAddComment(comment);
      event.preventDefault();
    }
  };

  const emptyMessage = <CommentAlert>Comment cannot be empty!</CommentAlert>

  return (
    <CommentForm onSubmit={submitCommentHandler}>
      <CommentFormControl>
        <CommentFormLabel htmlFor="name">Name</CommentFormLabel>
        <CommentFormInput
          type="text"
          value={getNameValue}
          id="name"
          onChange={nameChangeHandler}
          ref={nameRef}
          placeholder="insert your name (can be empty tho, it'll become anonymous)"
          />
      </CommentFormControl>
      <CommentFormControl>
        <CommentFormLabel htmlFor="comment">Comment</CommentFormLabel>
        {emptyComment ? emptyMessage : ""}
        <CommentFormTextArea
          onClick={() => setEmptyComment(false)}
          emptyComment={emptyComment}
          id="comment"
          value={getCommentValue}
          onChange={commentChangeHandler}
          ref={commentRef}
          placeholder="your comment about Fikri?"
        ></CommentFormTextArea>
      </CommentFormControl>
      <CommentFormButton type="submit">Add Comment</CommentFormButton>
    </CommentForm>
  );
};

export default AddComment;
