import styled from "styled-components";
import { useRef } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import { ReactComponent as Cancel } from "../../../../Images/cancelIcon.svg";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";
import { useState } from "react";

export const Notifications = ({ setActive }) => {
  const NotifRef = useRef(null);
  useClickOutside(NotifRef, () => setActive(false));
  const token = useSelector((state) => state.reducer.doctorDetails.token);

  const [notifications, setNotifications] = useState();

  const getNotifications = (res) => {
    setNotifications(res.data.data);
    console.log(res);
  };

  const { loading } = useFetch(
    token,
    "/doctors-notification",
    getNotifications
  );
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
  z-index: 1000 !important;
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
