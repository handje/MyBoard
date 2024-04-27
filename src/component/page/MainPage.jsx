import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import PostList from "../list/PostList";
import { Wrapper, Container } from "../../styles";
import { getItem } from "../../utils/useLocalStorage";

const MainPage = () => {
  const navigate = useNavigate();
  const postList = getItem("posts")?.reverse();

  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write", { state: postList });
          }}
        />
        <PostList
          posts={postList}
          onClickItem={(item) => navigate(`/post/${item.id}`)}
        ></PostList>
      </Container>
    </Wrapper>
  );
};
export default MainPage;
