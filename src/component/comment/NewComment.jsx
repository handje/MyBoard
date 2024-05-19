import React, { useState } from "react";
import { Button, Input, Form } from "../common";
import { getItem, setItem, findPost } from "../../utils";

const NewComment = ({ postList, postIndex, newComment, setNewComment }) => {
  const createComment = (e) => {
    e.preventDefault();

    if (window.confirm("댓글을 등록하시겠습니까?")) {
      if (newComment.length) {
        const comment = {
          id: crypto.randomUUID(),
          content: newComment,
        };
        postList[postIndex].comments.push(comment);
        const newPost = postList[postIndex];
        postList.splice(postIndex, 1);
        setItem("posts", [...postList, newPost]);
        setNewComment("");
      } else {
        window.alert("내용을 입력해주세요.");
      }
    }
  };

  return (
    <Form onSubmit={createComment}>
      <Input
        type="text"
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
      <Button title="댓글 작성하기" />
    </Form>
  );
};

export default NewComment;
