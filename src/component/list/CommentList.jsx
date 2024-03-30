import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";
//post목록, postlistItem을 이용하여 화면에 뿌림

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  :not(:last-child) {
    margin-botton: 16px;
  }
`;
const CommentList = (props) => {
  const { comments } = props;
  return (
    <Wrapper>
      {comments?.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
};
export default CommentList;
