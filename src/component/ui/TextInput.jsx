import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100%-32px);
  ${(props) => props.height && `height:${props.height}px;`}
  padding:16px;
  font-size: 16px;
  line-height: 20px;
  background: #f2f2f2;
  outline: 0;
`;

const TextInput = (props) => {
  const { height, value, onChange } = props;
  return <StyledTextarea height={height} onChange={onChange} value={value} />;
};
export default TextInput;
