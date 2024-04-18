import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { type, placeholder, value, onChange } = props;
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

const StyledInput = styled.input`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `
      height: ${props.height}px;
  `}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid #ccc;

  &::placeholder {
    color: #ccc;
  }
`;

export default Input;
