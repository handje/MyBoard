import { Outlet } from "react-router-dom";
import { Header } from "../ui/styles";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header onClick={() => navigate("/")}>BLOG</Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
