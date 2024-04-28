import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { ListWrapper } from "../../styles";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Form from "../ui/Form";
import { setItem } from "../../utils/useLocalStorage";

const CommentList = (props) => {
  const { postList, post, postIndex, loggedInUser, memoMode, setMemoMode } =
    props;
  const [newMemo, setNewMemo] = useState("");
  // const [newPost, setNewPost] = useState(post);

  const createComment = (e) => {
    e.preventDefault();
    if (newMemo.length) {
      const comment = {
        id: uuidv4(),
        content: newMemo,
      };
      post.comments.push(comment);
      postList.splice(postIndex, 1);
      setItem(loggedInUser, [...postList, post]);
      setNewMemo("");
      setMemoMode(!newMemo);
    } else {
      window.alert("내용을 입력해주세요.");
    }
  };

  const deleteMemo = (id) => {
    // const newMemos = post.comments.filter((comment) => comment.id !== id);
    // console.log(newPost);
    // setNewPost({ ...post, comments: newMemos });
    // postList.splice(postIndex, 1);
    // console.log(newPost);
    // setItem(loggedInUser, [...postList, newPost]);
  };
  return (
    <>
      {memoMode && (
        <MemoContainer>
          <CommentLabel>메모</CommentLabel>
          <Form onSubmit={createComment}>
            <Input
              type="text"
              value={newMemo}
              className={"input"}
              onChange={(event) => {
                setNewMemo(event.target.value);
              }}
            />
            <Button title="등록" />
          </Form>
        </MemoContainer>
      )}
      <ListWrapper>
        {post?.comments?.map((comment) => {
          return (
            <CommentContainer className="container" key={comment.id}>
              <Wrapper id="wrapper">
                <ContentText>{comment?.content}</ContentText>
              </Wrapper>
              <StyledButton onClick={() => deleteMemo(comment.id)}>
                ❌
              </StyledButton>
            </CommentContainer>
          );
        })}
      </ListWrapper>
    </>
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
  border: 1px solid grey;
  border-radius: 8px;
  #wrapper {
    margin-bottom: 0px;
  }
`;
const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  margin: 5px 0px;
`;
const StyledButton = styled.button`
  border: none;
  background: transparent;
  margin: 0 0 0 10px;
  padding: 10px 0 20px 0;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

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
