import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../ui/Input";
import Button from "../ui/Button";
import { Wrapper, Container } from "../../styles";
import { useAuth } from "../../utils/AuthContext";
import { getItem } from "../../utils/useLocalStorage";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const { login } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    const users = getItem("users") ?? [];
    const [loginUser] = users.filter(
      (user) => user.userName === userName && user.pwd === pwd
    );

    if (loginUser) {
      login(userName);
      navigate("/");
    } else {
      alert("비밀번호를 확인해주세요.");
      setUserName("");
      setPwd("");
    }
  };

  return (
    <Wrapper>
      <Container>
        <LoginForm onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="password"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <Button title="login" width={100} />
        </LoginForm>
      </Container>
    </Wrapper>
  );
};

const LoginForm = styled.form`
  position: relative;
  z-index: 1;
  max-width: 360px;
  margin: 100px auto;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export default LoginPage;
