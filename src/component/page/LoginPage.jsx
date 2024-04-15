import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../ui/Button";

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

const StyledInput = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  padding: 15px;
  font-size: 14px;
`;
const StyledButton = styled.button`
  text-transform: uppercase;
  background: grey;
  width: 100%;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;

  &:hover {
    background: dimgray;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"))?.filter(
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
      <StyledInput
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <StyledInput
        type="password"
        placeholder="PWD"
        value={pwd}
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <StyledButton>login</StyledButton>
    </LoginForm>
  );
};

export default LoginPage;
