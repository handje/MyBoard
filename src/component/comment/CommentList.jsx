import React from "react";

import { ListWrapper } from "../styles/styles";
import { CommentListItem } from "./";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <ListWrapper>
      {comments?.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </ListWrapper>
  );
};
export default CommentList;