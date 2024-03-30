import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";
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
const PostList = (props) => {
  const { posts, onClickItem } = props;
  return (
    <Wrapper>
      {posts?.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => onClickItem(post)}
          />
        );
      })}
    </Wrapper>
  );
};
export default PostList;
