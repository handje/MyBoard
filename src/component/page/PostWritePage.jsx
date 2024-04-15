import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextInput from "../ui/TextInput";
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
    <form onSubmit={onSubmit}>
      <TextInput
        height={20}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <TextInput
        height={480}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <Button
        title="뒤로 가기"
        onClick={() => {
          navigate("/");
        }}
      />
      <Button title="글 작성하기" />
    </form>
  );
};
export default PostWritePage;
