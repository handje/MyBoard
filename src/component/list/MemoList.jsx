import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

import { ListWrapper } from "../../styles";
import CommentListItem from "./CommentListItem";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Form from "../ui/Form";
import { getItem, setItem } from "../../utils/useLocalStorage";
import { useAuth } from "../../utils/AuthContext";

const CommentList = (props) => {
  const { postList, post, postIndex, loggedInUser, newMemo } = props;
  const [newComment, setNewComment] = useState("");

  const createComment = (e) => {
    e.preventDefault();
    if (window.confirm("댓글을 등록하시겠습니까?")) {
      if (newComment.length) {
        const comment = {
          id: uuidv4(),
          content: newComment,
        };
        post.comments.push(comment);
        postList.splice(postIndex, 1);
        setItem(loggedInUser, [...postList, post]);
        setNewComment("");
      } else {
        window.alert("내용을 입력해주세요.");
      }
    }
  };

  return (
    <>
      {newMemo && (
        <MemoContainer>
          <CommentLabel>메모</CommentLabel>
          <Form onSubmit={createComment}>
            <Input
              type="text"
              value={newComment}
              className={"input"}
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
            <Button title="등록" />
          </Form>
        </MemoContainer>
      )}
      <ListWrapper>
        {post?.comments?.map((comment) => {
          return <CommentListItem key={comment.id} comment={comment} />;
        })}
      </ListWrapper>
    </>
  );
};
const MemoContainer = styled.div`
  .input {
    margin-bottom: 0;
  }
`;

const CommentLabel = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export default CommentList;
