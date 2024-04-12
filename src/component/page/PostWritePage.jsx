import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const PostWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [postList, setPostList] = useState(() => {
    const localData = localStorage.getItem("test2");
    if (localData) {
      return JSON.parse(localData);
    } else {
      return [];
    }
  });

  // useEffect(() => {
  //   console.log("save local");
  //   localStorage.setItem("test2", JSON.stringify(postList));
  // }, [postList]);

  //useCallback으로 바꿀방법???????????????????
  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: postList.length + 1,
      title: title,
      content: content,
      comments: [],
    };
    // setPostList([...postList, newPost]);
    localStorage.setItem("test2", JSON.stringify([...postList, newPost]));
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
      <Button title="글 작성하기" />
    </form>
  );
};
export default PostWritePage;
