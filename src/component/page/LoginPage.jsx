import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../ui/Button";

const LoginForm = styled.form`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .button {
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("user")).filter(
      (user) => user.id === id && user.pwd === pwd
    );
    if (users.length) {
      navigate("/post");
    } else {
      alert("ID, PassWord 확인해주세요.");
      setId("");
      setPwd("");
    }
  };
  return (
    <LoginForm onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="PWD"
        value={pwd}
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <Button title="login" />
    </LoginForm>
  );
};

export default LoginPage;
