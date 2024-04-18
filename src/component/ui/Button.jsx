import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { title, onClick, width } = props;
  return (
    <StyledButton className="button" onClick={onClick} width={width}>
      {title || "button"}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(props) => props.width && `width:${props.width}%;`}
  background: grey;
  padding: 8px 16px;
  margin: 0 3px;
  border: 0;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: dimgray;
  }
`;

export default Button;
