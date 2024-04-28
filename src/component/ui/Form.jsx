import styled from "styled-components";

const Form = (props) => {
  return (
    <StyledForm onSubmit={props.onSubmit} direction={props.direction}>
      {props.children}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  ${(props) => props.direction && `flex-direction:${props.direction};`};
  justify-content: center;
  align-items: end;
`;

export default Form;
