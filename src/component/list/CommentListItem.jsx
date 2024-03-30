import React from "react";
import styled from "styled-components";
//글 목록, 글 제목만 표시
const Wrapper = styled.div`
  width: calc(100%-32px);
  padding: 8px 16px;
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
`;
const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;

const PostListItem = (props) => {
  const { comment } = props;
  return (
    <Wrapper>
      <ContentText>{comment?.content}</ContentText>
    </Wrapper>
  );
};

export default PostListItem;
