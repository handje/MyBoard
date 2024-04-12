import React, { useState, useEffect } from "react";
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
  const [postData, setPostData] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("test");
    if (localData) {
      const [dataList] = JSON.parse(localData).filter(
        (post) => post.id === Number(postId)
      );
      setPostData(dataList);
    }
  }, [postId]);

  return (
    <>
      <Button
        title="뒤로 가기"
        onClick={() => {
          navigate("/");
        }}
      />{" "}
      <Button
        title="수정하기"
        onClick={() => {
          navigate(`/post-write/${postId}`);
        }}
      />
      <PostContainer>
        <TitleText>{postData.title}</TitleText>
        <ContentText>{postData.content}</ContentText>
      </PostContainer>
      <CommentLabel>댓글</CommentLabel>
      <CommentList comments={postData.comments} />
      <TextInput
        height={40}
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
      <Button
        title="댓글 작성하기"
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );
};

export default PostViewPage;
