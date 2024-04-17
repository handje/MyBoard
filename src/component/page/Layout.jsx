import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "../page/LoginPage";

const Layout = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("loginUser");
  return (
    <>
      <Header onClick={() => navigate("/")}>BLOG</Header>
      <Wrapper className="wrapper">
        <Container className="container">
          {user ? <Outlet /> : <LoginPage />}
        </Container>
      </Wrapper>
    </>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  color: #ffffff;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background-color: grey;
`;

const Wrapper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  };

`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default Layout;
