import React from "react";
import styled from "styled-components";

const MutiLineInput = (props) => {
  const { height, value, onChange } = props;
  return <StyledTextarea height={height} onChange={onChange} value={value} />;
};

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `
        height: ${props.height}px;
    `}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

export default MutiLineInput;
