import React from "react";
import styled from "styled-components";
import { Dropdown, Search } from "../../../Components";
import { NavItem, SearchDiv } from "../style";
import { useSelector } from "react-redux/es/exports";
import { ReactComponent as UnReadNotification } from "../../../Images/NotifyBell.svg";
import { ReactComponent as Notification } from "../../../Images/NotifyBell_.svg";
import { ReactComponent as Spin } from "../../../Images/Spinner.svg";
import "./style.css";
import { useState } from "react";
import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { ReactComponent as Cancel } from "../../../Images/cancelIcon.svg";
import { useNavigate } from "react-router";
import { Notifications } from "./Notification";

export const Initials = () => {
  const user = useSelector((state) => state.reducer.doctorDetails.name);
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
  const [hasUnread, setHasUnread] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <SearchDiv>
        {showNotif && <Notifications setActive={setShowNotif} />}

        <Search
          placeholder={"Search Doctors"}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <NavItem>
          {hasUnread === true ? (
            <UnReadNotification
              style={{ cursor: "pointer" }}
              onClick={() => setShowNotif(true)}
            />
          ) : (
            <Notification
              style={{ cursor: "pointer" }}
              onClick={() => setShowNotif(true)}
            />
          )}

          <span
            onClick={() => {
              navigate("/doctor/profile");
            }}
          >
            <Initials />
          </span>
        </NavItem>
      </SearchDiv>
      {searchValue.length > 0 && <SearchResult />}
    </>
  );
};

export const SearchResult = () => {
  const [viewProfileActive, setViewProfileActive] = useState(false);
  const FilterList = ["Highest Rated", "Lowest Rated"];
  const [filter, setFilter] = useState("");

  return (
    <>
      {viewProfileActive && (
        <ViewProfileModal>
          {/* <ViewProfile
            setActive={setViewProfileActive}
            specialty
            language
            location
            patient
            name
            book
            rating
          /> */}
        </ViewProfileModal>
      )}

      <SearchResultDiv>
        <SearchResultHeader>
          <h1>4 results for “Dr Oge Amadi”</h1>
          <div>
            <h3>Filter list </h3>
            <Dropdown
              label="Highest Rated"
              width={"20rem"}
              items={FilterList}
              onSelect={setFilter}
              selectedItem={filter}
            />
          </div>
        </SearchResultHeader>
        <SearchResults>
          {/* <DoctorCardItem setActive={setViewProfileActive} />
          <DoctorCardItem />
          <DoctorCardItem />
          <DoctorCardItem /> */}
        </SearchResults>
      </SearchResultDiv>
    </>
  );
};

const SearchResultDiv = styled.div`
  box-sizing: border-box;
  width: calc(100vw - 26rem);
  height: calc(100vh - 5rem);
  max-height: fit-content;
  max-width: 230rem;
  padding: 5rem;
  background-color: rgba(241, 239, 239, 1);
  overflow: hidden;
  position: fixed;
  margin: auto;
  bottom: 0;
  right: 0;
  z-index: 100;
`;
const ViewProfileModal = styled.div`
  width: calc(100vw - 26rem);
  height: 50vh;
  max-height: fit-content;
  max-width: 230rem;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin-top: -10rem;
`;

const SearchResultHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  justify-content: space-between;
  h1 {
    font-weight: 600;
    font-size: 1.8rem;
  }
  div {
    align-items: center;
    display: flex;
    h3 {
      margin: 0;
      padding: 0;
      color: rgba(0, 0, 255, 1);
      font-weight: 500;
      font-size: 1.6rem;
      margin-right: 2rem;
    }
  }
`;

const SearchResults = styled.div`
  overflow-y: scroll;
  height: 40rem;
  width: fit-content;
  box-sizing: border-box;
  padding: 0 1rem;
`;
export const Spinner = () => {
  return (
    <SpinnerDiv>
      <Spin className="loader-spin-doctor" />
    </SpinnerDiv>
  );
};

const SpinnerDiv = styled.div`
  justify-self: center;
  align-self: center;
  transform: scale(0.45);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
