import React from "react";
import styled from "styled-components";
import { Search } from "../../../Components";
import { SearchDiv } from "../style";
import { useSelector } from "react-redux/es/exports";
import { ReactComponent as Notification } from "../../../Images/NotifyBell.svg";
import { ReactComponent as Spin } from "../../../Images/Spinner.svg";
import "./style.css";
import { useState } from "react";
import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";

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
      <div>
        <Notification
          style={{ cursor: "pointer" }}
          onClick={() => setShowNotif(true)}
        />
        <span>
          <Initials />
        </span>
      </div>
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
      <NotificationDiv ref={NotifRef}></NotificationDiv>
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
  width: 45rem;
  height: 85%;
  background-color: white;
  top: 6rem;
  position: absolute;
  right: 5rem;
  box-shadow: 3px 0px 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
`;
