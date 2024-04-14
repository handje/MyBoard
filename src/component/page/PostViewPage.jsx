import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";

const PostContainer = styled.div`
  padding: 8px 16x;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const PostViewPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [newComment, setNewComment] = useState("");

  const postList = JSON.parse(localStorage.getItem("test"));
  const postIndex = postList.findIndex((item) => item.id === parseInt(postId));
  const post = postList[postIndex];

  const deletePost = () => {
    postList.splice(postIndex, 1);
    localStorage.setItem("test", JSON.stringify(postList));
    navigate("/");
  };

  const createComment = (e) => {
    e.preventDefault();
    const comment = {
      id: parseInt(postId) * 10 + post.comments.length + 1,
      content: newComment,
    };
    post.comments.push(comment);
    postList.splice(postIndex, 1);
    localStorage.setItem("test", JSON.stringify([...postList, post]));
    setNewComment("");
  };

  return (
    <>
      <Button
        title="뒤로 가기"
        onClick={() => {
          navigate("/");
        }}
      />
      <Button
        title="수정하기"
        onClick={() => navigate(`/post-write/${postId}`)}
      />
      <Button title="삭제하기" onClick={deletePost} />
      <PostContainer>
        <TitleText>{post?.title}</TitleText>
        <ContentText>{post?.content}</ContentText>
      </PostContainer>
      <form onSubmit={createComment}>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post?.comments} />
        <TextInput
          height={40}
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        />
        <Button title="댓글 작성하기" />
      </form>
    </>
  );
};

export default PostViewPage;
