import React from "react";
import styled from "styled-components";

const PostListItem = (props) => {
  const { comment } = props;
  return (
    <Wrapper>
      <ContentText>{comment?.content}</ContentText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  margin: 10px 0px;
  padding: 5px 10px;
`;
const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  margin: 5px 0px;
`;
export default PostListItem;
