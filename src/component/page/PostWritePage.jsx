import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Form from "../ui/Form";
import Input from "../ui/Input";
import MutiLineInput from "../ui/MutiLineInput";
import Button from "../ui/Button";
import { Wrapper, Container } from "../../styles";
import { getItem, setItem } from "../../utils/useLocalStorage";
import currentDate from "../../utils/useCurrentDate";

const PostWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const postList = getItem("posts") ?? [];

  //useCallback으로 바꿀방법???????????????????s
  const onSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("게시물을 등록하시겠습니까?")) {
      if (title.length && content.length) {
        const newPost = {
          id: uuidv4(),
          title: title,
          content: content,
          date: currentDate(new Date()),
          comments: [],
        };
        setItem("posts", [...postList, newPost]);
        navigate("/");
      } else {
        window.alert("내용을 입력해주세요.");
      }
    }
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
