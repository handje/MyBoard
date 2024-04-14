import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const PostUpdatePage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const postList = JSON.parse(localStorage.getItem("test2"));
  const postIndex = postList.findIndex((item) => item.id === parseInt(postId));
  const post = postList[postIndex];

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const onSubmit = (e) => {
    e.preventDefault();
    const updatePost = {
      id: parseInt(postId),
      title: title,
      content: content,
      comments: post.comments,
    };
    postList.splice(postIndex, 1);
    localStorage.setItem("test2", JSON.stringify([...postList, updatePost]));
    navigate(`/post/${postId}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        height={20}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextInput
        height={480}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button
        title="뒤로 가기"
        onClick={() => {
          navigate(`/post/${postId}`);
        }}
      />
      <Button title="글 수정하기" />
    </form>
  );
};
export default PostUpdatePage;
