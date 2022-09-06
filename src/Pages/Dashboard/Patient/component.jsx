import React from "react";
import styled from "styled-components";
import { Search } from "../../../Components";
import { NavItem, SearchDiv } from "../style";
import { useSelector } from "react-redux/es/exports";
import { ReactComponent as Notification } from "../../../Images/NotifyBell.svg";
import { ReactComponent as Spin } from "../../../Images/Spinner.svg";
import "./style.css";
import { useState } from "react";
import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { ReactComponent as Cancel } from "../../../Images/cancelIcon.svg";

export const Initials = () => {
  const user = useSelector((state) => state.reducer.userDetails.name);
  const firstName = user.split(" ")[0][0];
  const lastName = user.split(" ")[1][0];
  return (
    <InitialsContainer>
      <h1>
        {firstName}
        {lastName}
      </h1>
    </InitialsContainer>
  );
};
const InitialsContainer = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 255, 0.6);

  h1 {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    color: white;
    font-size: 1.4rem;
    letter-spacing: 0rem;
    font-weight: 600;
  }
`;

export const TopBar = () => {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <SearchDiv>
      {showNotif && <Notifications setActive={setShowNotif} />}

      <Search placeholder={"Search Doctors"} />
      <NavItem>
        <Notification
          style={{ cursor: "pointer" }}
          onClick={() => setShowNotif(true)}
        />
        <span>
          <Initials />
        </span>
      </NavItem>
    </SearchDiv>
  );
};

export const Spinner = () => {
  return (
    <SpinnerDiv>
      <Spin className="loader-spin" />
    </SpinnerDiv>
  );
};

const SpinnerDiv = styled.div`
  justify-self: center;
  align-self: center;
  transform: scale(0.45);
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Notifications = ({ setActive }) => {
  const NotifRef = useRef(null);
  useClickOutside(NotifRef, () => setActive(false));
  return (
    <Shade>
      <NotificationDiv ref={NotifRef}>
        <NotifHeader>
          <h1>Notifications</h1>
          <Cancel
            style={{ cursor: "pointer" }}
            onClick={() => setActive(false)}
          />
        </NotifHeader>
        <NotifyBody>
          <NotificationItem
            content={
              "Doctor Oge Amadi accepted your request to book a session for 10th August."
            }
            time={"20m"}
            type="request"
          />
        </NotifyBody>
      </NotificationDiv>
    </Shade>
  );
};

const Shade = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  margin: auto;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;
const NotificationDiv = styled.div`
  width: 40rem;
  max-width: 40rem;
  height: 83%;
  max-height: 100rem;
  background-color: white;
  top: 6rem;
  position: absolute;
  right: 5rem;
  padding: 1rem 2rem;
  padding-bottom: 2rem;
  box-shadow: 3px 0px 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;
const NotifHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`;
const NotifyBody = styled.div`
  overflow-y: scroll;
  height: 98%;
  width: 100%;
  margin: 1rem 0;
`;

const NotificationItem = ({ content, time, type }) => {
  return (
    <NotifItemBody>
      <NotificationPic />
      <NotificationContent>
        <NotificationContentText>{content}</NotificationContentText>
        <NotificationContentTime>{time} ago</NotificationContentTime>
        <NotificationButtonDiv>
          {type === "request" && (
            <div style={{ display: "flex" }}>
              <NotifButton>accept</NotifButton>
              <NotifButton>decline</NotifButton>
            </div>
          )}
          {type === "session" && (
            <div>
              <NotifButton>join</NotifButton>
            </div>
          )}
          {type === "pay" && (
            <div>
              <NotifButton>pay</NotifButton>
            </div>
          )}
          {type === "view" && (
            <div>
              <NotifButton>view</NotifButton>
            </div>
          )}
        </NotificationButtonDiv>
      </NotificationContent>
    </NotifItemBody>
  );
};

const NotifItemBody = styled.div`
  width: 100%;
  height: 15%;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const NotificationPic = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: gray;
  margin-right: 1rem;
`;

const NotificationContent = styled.div`
  height: 90%;
  max-height: 90%;
  width: 85%;
  max-width: 85%;
  position: relative;
`;
const NotificationContentText = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  width: 90%;
`;
const NotificationContentTime = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(85, 85, 85, 1);
`;
const NotificationButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: fit-content;
  height: fit-content;
  display: flex;
`;
const NotifButton = styled.div`
  cursor: pointer;
  color: white;
  background-color: rgba(0, 0, 255, 1);
  border-radius: 0.3rem;
  width: 5rem;
  display: flex;
  padding: 0.2rem 0;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 1rem;
`;
