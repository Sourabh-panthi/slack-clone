import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider);
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/slack-logo-1481728-1254330.png"
          alt="img"
        />
        <h1>Signin in to the Slack</h1>
        <p>panthi.slack.com</p>
        <Button onClick={signIn}>Signin with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;
const LoginInnerContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    width: 80px;
  }
  > h1 {
    font-size: 25px;
    margin-top: 20px;
  }
  > p {
    font-size: 12px;
    font-weight: 500;
  }
  > .MuiButton-root {
    margin-top: 20px;
    font-size: 13px;
    text-transform: capitalize;
    background-color: #0a8d48 !important;
    color: white;
  }
  > .MuiButton-root:hover {
    background-color: #0a8d48;
    opacity: 0.9;
  }
`;
