import styled from "styled-components";

const Header = (props) => {
  const { onTitleClick } = props;

  return (
    <StyledHeader>
      <TitleText onClick={onTitleClick}>Blog</TitleText>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const TitleText = styled.h1`
  width: fit-content;
  color: #fff;
  font-size: 80px;
  font-family: system-ui;
  cursor: pointer;
  text-shadow: -2px 0 #cb99c5, 0 3px #cb99c5, 3px 0 #cb99c5, 0 -3px #cb99c5;
  border-radius: 8px;
`;
export default Header;
