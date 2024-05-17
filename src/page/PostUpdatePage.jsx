import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Form, Input, MutiLineInput, Button } from "../component/common";
import { Wrapper, Container } from "../component/styles/styles";
import { currentDate, getItem, setItem } from "../utils";

const PostUpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const postList = getItem("posts");
  const postIndex = postList.findIndex((item) => item.id === id);
  const post = postList[postIndex];

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const onSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("수정하시겠습니까?")) {
      const updatePost = {
        id: id,
        title: title,
        content: content,
        date: post.date,
        updateDate: currentDate(),
        comments: post.comments,
      };
      postList.splice(postIndex, 1);
      setItem("posts", [...postList, updatePost]);
      navigate(`/post/${id}`);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate(`/post/${id}`);
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
