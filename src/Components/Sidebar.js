/* eslint-disable array-callback-return */
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("room"));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>PAPA FAN </h2>

          <h3>
            <FiberManualRecord />
            Sourabh Panthi
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOptions Icon={InsertComment} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mention & Reactions" />
      <SidebarOptions Icon={Drafts} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOptions addChannelOption Icon={Add} title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.3;
  position: fixed;
  margin-top: 60px;
  height: 100vh;
  min-width: 250px;
  background-color: var(--slack-color);
  color: white;
  border-top: 1px solid #49274b;
  padding-top: 10px;
  > hr {
    margin-top: 5px;
    margin-bottom: 5 px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  > .MuiSvgIcon-root {
    color: var(--slack-color);
    background-color: white;
    border-radius: 50%;
    padding: 4px;
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;
const SidebarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h2 {
    font-size: 15px;
    margin-left: 20px;
  }
  > h3 {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 5px;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
    margin-right: 5px;
    font-size: 10px;
  }
`;
