import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: grey;
  padding: 8px 16px;
  margin: 0 3px;
  border-radius: 8px;

  text-transform: uppercase;
  font-size: 16px;
  color: #ffffff;

  cursor: pointer;
  &:hover {
    background: dimgray;
  }
`;

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <StyledButton className="button" onClick={onClick}>
      {title || "button"}
    </StyledButton>
  );
};

export default Button;
