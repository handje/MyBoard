import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const PostUpdatePage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("test2");
    if (localData) {
      setPost(
        JSON.parse(localData).filter((post) => post.id === parseInt(postId))
      );
      setTitle(post.title);
      setContent(post.content);
    }
  }, []);

  return (
    <form>
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
    </form>
  );
};
export default PostUpdatePage;
