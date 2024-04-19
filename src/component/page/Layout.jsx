import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "../page/LoginPage";
import UserIcon from "../ui/UserIcon";
import { useAuth } from "../../AuthContext";

const Layout = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useAuth();

  return (
    <>
      <Header onClick={() => navigate("/")}>
        <TitleText>Blog</TitleText>
        <UserContainer>
          <UserIcon />
          {loggedInUser}
        </UserContainer>
      </Header>
      {loggedInUser ? <Outlet /> : <LoginPage />}
    </>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const TitleText = styled.h1`
  width: fit-content;
  color: grey;
  font-size: 50px;
  cursor: pointer;
`;
const UserContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  right: 5px;
  text-align: center;
  cursor: pointer;
`;

export default Layout;
