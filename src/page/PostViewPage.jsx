import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../component/common";
import { Wrapper, Container } from "../component/styles/styles";
import { CommentList, NewComment } from "../component/comment";
import { getItem, setItem, findPost } from "../utils";

const PostViewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");

  const postList = getItem("posts");
  const { postIndex, post } = findPost(postList, id);

  const deletePost = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      postList.splice(postIndex, 1);
      setItem("posts", postList);
      navigate("/");
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
          <h1>{post?.title}</h1>
          <InfoText>{post?.date}</InfoText>
          <ContentText>{post?.content}</ContentText>
        </PostContainer>
        <Button
          title="수정하기"
          onClick={() => navigate(`/post/${id}/update`)}
        />
        <Button title="삭제하기" onClick={deletePost} />
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post?.comments} />
        <NewComment
          newComment={newComment}
          setNewComment={setNewComment}
          postList={postList}
          postIndex={postIndex}
        />
      </Container>
    </Wrapper>
  );
};

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid #cb99c5;
  border-radius: 8px;

  & > h1 {
    font-size: 30px;
  }
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
