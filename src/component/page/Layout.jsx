import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LoginPage from "./LoginPage";
import { useAuth } from "../../utils/AuthContext";
import Header from "../ui/Header";

const Layout = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useAuth();
  return (
    <>
      <Header onTitleClick={() => navigate("/")} loggedInUser={loggedInUser} />

      {loggedInUser ? <Outlet /> : <LoginPage />}
    </>
  );
};

export default Layout;
