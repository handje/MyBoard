import React from "react";
import styled from "styled-components";

const PostListItem = (props) => {
  const { post, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post?.title}</TitleText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  cursor: pointer;

  &:hover {
    border: 1px solid #cb99c5;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
export default PostListItem;
