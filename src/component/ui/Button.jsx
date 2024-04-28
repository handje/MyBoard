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
  height:100%;
  padding: 10px 16px;
  margin: 0px 3px;
  background: var(--primary-color);
  border: 0;
  border-radius: 8px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  cursor: pointer;

  &:before {
    height: 0%;
    width: 2px;
  }
  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

export default Button;
