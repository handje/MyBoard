import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../component/common";
import { PostList } from "../component/post";
import { Wrapper, Container } from "../component/styles/styles";
import { getItem } from "../utils/localStorage";
import { EmptyState } from "../component/fallback";

const MainPage = () => {
  const navigate = useNavigate();
  const postList = getItem("posts")?.reverse();
  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post/write", { state: postList });
          }}
        />
        {postList.length > 0 ? (
          <PostList
            posts={postList}
            onClickItem={(item) => navigate(`/post/${item.id}`)}
          ></PostList>
        ) : (
          <EmptyState />
        )}
      </Container>
    </Wrapper>
  );
};
export default MainPage;
