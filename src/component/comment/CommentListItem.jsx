import React from "react";
import styled from "styled-components";

import { UserIcon } from "../common";

const PostListItem = (props) => {
  const { comment } = props;
  const loginUser = "guest";
  return (
    <CommentContainer>
      <UserIcon></UserIcon>
      <Wrapper>
        <UserName>{loginUser}</UserName>
        <ContentText>{comment?.content}</ContentText>
      </Wrapper>
    </CommentContainer>
  );
};
const CommentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: calc(100% - 60px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
`;
const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin: 0;
`;
const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  margin: 5px 0px;
`;
export default PostListItem;
