import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../ui/Input";
import Button from "../ui/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) ?? [];
    const [loginUser] = users.filter(
      (user) => user.id === id && user.pwd === pwd
    );

    if (loginUser) {
      localStorage.setItem("loginUser", loginUser.id);
      navigate("/");
    } else {
      alert("ID, PassWord 확인해주세요.");
      setId("");
      setPwd("");
    }
  };

  return (
    <LoginForm onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="PWD"
        value={pwd}
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <Button title="login" width={100} />
    </LoginForm>
  );
};

//relative: 자기 자신을 기준으로,
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
