import styled from "styled-components";

import UserIcon from "../ui/UserIcon";
import Button from "./Button";
import { useAuth } from "../../utils/AuthContext";

const Header = (props) => {
  const { onTitleClick, loggedInUser } = props;
  const { logout } = useAuth();

  return (
    <StyledHeader>
      <TitleText onClick={onTitleClick}>Blog</TitleText>
      <UserContainer>
        <UserIcon />
        {loggedInUser}
        {loggedInUser && (
          <Button
            title={"logout"}
            onClick={() => {
              logout();
            }}
          />
        )}
      </UserContainer>
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
const UserContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  right: 5px;
  text-align: center;
  cursor: pointer;
`;
export default Header;
