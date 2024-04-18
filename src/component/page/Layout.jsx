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
      {user ? <Outlet /> : <LoginPage />}
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

export default Layout;
