import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../ui/Form";
import Input from "../ui/Input";
import MutiLineInput from "../ui/MutiLineInput";
import Button from "../ui/Button";
import { Wrapper, Container } from "../../styles";

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
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate("/");
          }}
        />
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
          <Button title="글 작성하기" />
        </Form>
      </Container>
    </Wrapper>
  );
};

export default PostWritePage;
