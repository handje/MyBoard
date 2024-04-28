import React from "react";
import styled from "styled-components";

const PostListItem = (props) => {
  const { comment } = props;

  return (
    <CommentContainer>
      <Wrapper>
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
const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  margin: 5px 0px;
`;
export default PostListItem;
