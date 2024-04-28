import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../ui/Button";
import { Wrapper, Container } from "../../styles";
import MemoList from "../list/MemoList";
import { getItem, setItem } from "../../utils/useLocalStorage";
import { useAuth } from "../../utils/AuthContext";

const PostViewPage = () => {
  const { loggedInUser } = useAuth();

  const navigate = useNavigate();
  const { postId } = useParams();

  const [newMemo, setNewMemo] = useState(false);
  const postList = getItem(loggedInUser);
  const postIndex = postList.findIndex((item) => item.id === postId);
  const post = postList[postIndex];

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
          <TitleText>{post?.title}</TitleText>
          <InfoText>{post?.date}</InfoText>
          <ContentText>{post?.content}</ContentText>
        </PostContainer>
        <Button
          title="수정하기"
          onClick={() => navigate(`/post-write/${postId}`)}
        />
        <Button title="삭제하기" onClick={deletePost} />
        <Button
          title={newMemo ? "취소" : "메모 추가"}
          onClick={() => {
            setNewMemo(!newMemo);
          }}
        />
        <MemoList
          postList={postList}
          post={post}
          postIndex={postIndex}
          loggedInUser={loggedInUser}
          newMemo={newMemo}
        />
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

export default PostViewPage;
