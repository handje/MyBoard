import React from "react";
import styled from "styled-components";
//글 목록, 글 제목만 표시
const Wrapper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
  border: 1px red solid;
`;
const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListItem = (props) => {
  const { post, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post?.title}</TitleText>
    </Wrapper>
  );
};

export default PostListItem;
