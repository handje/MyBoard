import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import PostList from "../list/PostList";
import { Wrapper, Container } from "../ui/styles";
import data from "../../data.json";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="layout">
      <Container>
        <PostList
          posts={data}
          onClickItem={(item) => navigate(`/post/${item.id}`)}
        ></PostList>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
      </Container>
    </Wrapper>
  );
};
export default MainPage;
