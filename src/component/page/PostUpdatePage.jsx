import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const PostUpdatePage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post] = data.filter((data) => data.id === Number(postId));
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  return (
    <>
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
        title="글 작성하기"
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );
};
export default PostUpdatePage;
