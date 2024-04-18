import React from "react";
import styled from "styled-components";

import { ItemWrapper } from "../../styles";

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListItem = (props) => {
  const { post, onClick } = props;
  return (
    <ItemWrapper onClick={onClick}>
      <TitleText>{post?.title}</TitleText>
    </ItemWrapper>
  );
};

export default PostListItem;
