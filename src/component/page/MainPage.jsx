import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import PostList from "../list/PostList";

const MainPage = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("test2");
    if (localData) {
      const dataList = JSON.parse(localData).sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );
      setPostList(dataList);
    }
  }, []);

  return (
    <>
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
    </>
  );
};
export default MainPage;
