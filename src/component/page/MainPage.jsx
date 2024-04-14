import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import PostList from "../list/PostList";

const MainPage = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  // const [postList, setPostList] = useState([]);
  const postList = JSON.parse(localStorage.getItem("test2")).sort(
    (a, b) => parseInt(a.id) - parseInt(b.id)
  );

  // useEffect(() => {
  //   const localData = localStorage.getItem("test2");
  //   if (localData) {
  //     const dataList = JSON.parse(localData).sort(
  //       (a, b) => parseInt(a.id) - parseInt(b.id)
  //     );
  //     setPostList(dataList);
  //   }
  // }, []);
=======
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("test");
    if (localData) {
      const dataList = JSON.parse(localData).sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );
      setPostList(dataList);
    }
  }, []);
>>>>>>> a0a6e6f06718446ee2f8c8f853e367fe223192f8

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
