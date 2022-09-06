import React from "react";
import styled from "styled-components";

const Message = ({ user, message, timestamp, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="img" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    width: 50px;
    border-radius: 10px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 {
  }
  > h4 > span {
    font-size: 10px;
    color: gray;
    font-weight: 300;
    margin-left: 10px;
  }
`;
