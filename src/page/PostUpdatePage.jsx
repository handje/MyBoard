import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../component/common";
import { PostForm } from "../component/post";
import { Wrapper, Container } from "../component/styles/styles";
import { currentDate, getItem, setItem, findPost } from "../utils";
import { useOnChange } from "../hooks";

const PostUpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const postList = getItem("posts");
  const { postIndex, post } = findPost(postList, id);

  const [title, handleChangeTitle] = useOnChange(post?.title);
  const [content, handleChangeContent] = useOnChange(post?.content);

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (!window.confirm("게시물을 수정하시겠습니까?")) {
        return;
      }
      if (!title.length || !content.length) {
        window.alert("내용을 입력해주세요.");
        return;
      }
      const updatePost = {
        id: id,
        title: title,
        content: content,
        date: post.date,
        updateDate: currentDate(),
        comments: post.comments,
      };
      postList.splice(postIndex, 1);
      setItem("posts", [...postList, updatePost]);
      navigate(`/post/${id}`);
    } catch (error) {
      throw new Error("게시물 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate(`/post/${id}`);
          }}
        />
        <PostForm
          onSubmit={onSubmit}
          title={title}
          handleChangeTitle={handleChangeTitle}
          content={content}
          handleChangeContent={handleChangeContent}
          buttonTitle={"글 수정하기"}
        />
      </Container>
    </Wrapper>
  );
};

export default PostUpdatePage;
