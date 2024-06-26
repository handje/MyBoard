import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../component/common";
import { Wrapper, Container } from "../component/styles/styles";
import { PostForm } from "../component/post";
import { currentDate, getItem, setItem } from "../utils";
import { useOnChange } from "../hooks";

const PostWritePage = () => {
  const navigate = useNavigate();
  const [title, handleChangeTitle] = useOnChange("");
  const [content, handleChangeContent] = useOnChange("");
  const postList = getItem("posts");

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (!window.confirm("게시물을 등록하시겠습니까?")) {
        return;
      }
      if (!title.length || !content.length) {
        window.alert("내용을 입력해주세요.");
        return;
      }
      const newPost = {
        id: crypto.randomUUID(),
        title: title,
        content: content,
        date: currentDate(),
        comments: [],
      };
      setItem("posts", [...postList, newPost]);
      navigate("/");
    } catch (error) {
      throw new Error("게시물 등록 중 오류가 발생했습니다.");
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
        <PostForm
          onSubmit={onSubmit}
          title={title}
          handleChangeTitle={handleChangeTitle}
          content={content}
          handleChangeContent={handleChangeContent}
          buttonTitle={"글 작성하기"}
        />
      </Container>
    </Wrapper>
  );
};

export default PostWritePage;
