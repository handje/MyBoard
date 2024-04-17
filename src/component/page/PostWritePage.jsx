import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Form from "../ui/Form";
import Input from "../ui/Input";
import MutiLineInput from "../ui/MutiLineInput";
import Button from "../ui/Button";

const PostWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const postList = JSON.parse(localStorage.getItem("test")) ?? [];

  //useCallback으로 바꿀방법???????????????????
  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: postList.length + 1,
      title: title,
      content: content,
      comments: [],
    };
    localStorage.setItem("test", JSON.stringify([...postList, newPost]));
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <MutiLineInput
        height={480}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <ButtonContainer>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <Button title="글 작성하기" />
      </ButtonContainer>
    </Form>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0;
`;

export default PostWritePage;
