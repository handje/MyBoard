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
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  padding: 15px;
  font-size: 14px;
`;

export default Input;
