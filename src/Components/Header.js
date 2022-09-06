import styled from "styled-components";
import React from "react";
import { Avatar } from "@mui/material";
import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input placeholder="Search.." />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  background-color: var(--slack-color);
  color: white;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  background-color: #421f44;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;
  border-radius: 6px;
  margin-left: 30px;
  > input {
    background-color: transparent;
    color: white;
    outline: 0;
    border: 0;
    width: 30vw;
    text-align: center;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    margin-right: 20px;
    margin-left: auto;
  }
`;
