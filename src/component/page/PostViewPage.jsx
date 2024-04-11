import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";
import { Wrapper } from "../ui/styles";
import data from "../../data.json";
import { Container } from "../ui/styles";

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
  const [post] = data.filter((data) => data.id === Number(postId));
  const [comment, setComment] = useState("");

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>
        <Button
          title="수정하기"
          onClick={() => {
            navigate(`/post-write/${postId}`);
          }}
        />
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />
        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default PostViewPage;
