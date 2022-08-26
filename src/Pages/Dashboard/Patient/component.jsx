import React from "react";
import styled from "styled-components";
import { Search } from "../../../Components";
import { SearchDiv } from "../style";
import { useSelector } from "react-redux/es/exports";
import { ReactComponent as Notification } from "../../../Images/NotifyBell.svg";

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
  return (
    <SearchDiv>
      <Search placeholder={"Search Doctors"} />
      <div>
        <Notification />
        <span>
          <Initials />
        </span>
      </div>
    </SearchDiv>
  );
};
