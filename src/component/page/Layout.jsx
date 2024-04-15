import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "../page/LoginPage";

export const Header = styled.header`
  position: sticky;
  top: 0;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background-color: grey;
`;

export const Wrapper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Layout = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("loginUser");
  return (
    <>
      <Header onClick={() => navigate("/")}>BLOG</Header>
      <Wrapper>
        <Container>{user ? <Outlet /> : <LoginPage />}</Container>
      </Wrapper>
    </>
  );
};

export default Layout;
