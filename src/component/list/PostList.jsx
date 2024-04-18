import React from "react";

import { ListWrapper } from "../../styles";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  const { posts, onClickItem } = props;
  return (
    <ListWrapper>
      {posts?.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => onClickItem(post)}
          />
        );
      })}
    </ListWrapper>
  );
};
export default PostList;
