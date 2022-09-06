import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import Chat from "./Components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Components/Login";
import Spinner from "react-spinkit";
function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContainer>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/slack-logo-1481728-1254330.png"
            alt="img"
          />
          <LoadingSpinner name="folding-cube" color="purple" fodeIn="none" />
        </AppLoadingContainer>
      </AppLoading>
    );
  }

  return (
    <>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Sidebar />
            <AppBody>
              <Routes>
                <Route path="/" element={<Chat />}></Route>
              </Routes>
            </AppBody>
          </>
        )}
      </div>
    </>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
const AppLoadingContainer = styled.div`
  > img {
    width: 100px;
    margin-bottom: 40px;
  }
`;
const LoadingSpinner = styled(Spinner)`
  margin-left: 37px;
`;
