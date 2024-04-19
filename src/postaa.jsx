import React from "react";
import styled from "styled-components";

import { ItemWrapper } from "../../styles";

const PostListItem = (props) => {
  const { comment } = props;
  return (
    <ItemWrapper>
      <ContentText>{comment?.content}</ContentText>
    </ItemWrapper>
  );
};

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;
export default PostListItem;
