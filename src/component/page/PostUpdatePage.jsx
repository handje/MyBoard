import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Form from "../ui/Form";
import Input from "../ui/Input";
import MutiLineInput from "../ui/MutiLineInput";
import Button from "../ui/Button";
import { Wrapper, Container } from "../../styles";
import { getItem, setItem } from "../utils/localStorage";
import currentDate from "../utils/currentDate";

const PostUpdatePage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const postList = getItem("posts");
  const postIndex = postList.findIndex((item) => item.id === postId);
  const post = postList[postIndex];

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const onSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("수정하시겠습니까?")) {
      const updatePost = {
        id: postId,
        title: title,
        content: content,
        date: post.date,
        updateDate: currentDate(new Date()),
        comments: post.comments,
      };
      postList.splice(postIndex, 1);
      setItem("posts", [...postList, updatePost]);
      navigate(`/post/${postId}`);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate(`/post/${postId}`);
          }}
        />
        <Form onSubmit={onSubmit}>
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <MutiLineInput
            height={480}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Button title="글 수정하기" />
        </Form>
      </Container>
    </Wrapper>
  );
};

export default PostUpdatePage;
