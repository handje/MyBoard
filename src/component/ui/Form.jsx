import styled from "styled-components";

const Form = (props) => {
  return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export default Form;
