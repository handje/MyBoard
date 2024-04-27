import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Form from "../ui/Form";
import { Wrapper, Container } from "../../styles";
import CommentList from "../list/CommentList";
import { getItem, setItem } from "../../utils/useLocalStorage";

const PostViewPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [newComment, setNewComment] = useState("");

  const postList = getItem("posts");
  const postIndex = postList.findIndex((item) => item.id === postId);
  const post = postList[postIndex];

  const deletePost = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      postList.splice(postIndex, 1);
      setItem("posts", postList);
      navigate("/");
    }
  };

  const createComment = (e) => {
    e.preventDefault();
    if (window.confirm("댓글을 등록하시겠습니까?")) {
      if (newComment.length) {
        const comment = {
          id: uuidv4(),
          content: newComment,
        };
        post.comments.push(comment);
        postList.splice(postIndex, 1);
        setItem("posts", [...postList, post]);
        setNewComment("");
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
        <PostContainer>
          <TitleText>{post?.title}</TitleText>
          <InfoText>{post?.date}</InfoText>
          <ContentText>{post?.content}</ContentText>
        </PostContainer>
        <Button
          title="수정하기"
          onClick={() => navigate(`/post-write/${postId}`)}
        />
        <Button title="삭제하기" onClick={deletePost} />
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post?.comments} />
        <Form onSubmit={createComment}>
          <Input
            type="text"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <Button title="댓글 작성하기" />
        </Form>
      </Container>
    </Wrapper>
  );
};

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid #cb99c5;
  border-radius: 8px;
`;

const TitleText = styled.h1`
  font-size: 30px;
`;
const InfoText = styled.p`
  font-size: 10px;
`;

const ContentText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export default PostViewPage;
