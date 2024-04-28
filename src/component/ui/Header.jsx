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
  text-shadow: -2px 0 var(--primary-color), 0 3px var(--primary-color),
    3px 0 var(--primary-color), 0 -3px var(--primary-color);

  border-radius: 8px;
`;
export default Header;
