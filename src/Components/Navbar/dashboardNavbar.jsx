import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
//import icons
import { ReactComponent as DashboardIcon } from "../../Images/NavbarElements/dashboardIcon.svg";
import { ReactComponent as ProfileIcon } from "../../Images/NavbarElements/profileIcon.svg";
import { ReactComponent as CalendarIcon } from "../../Images/NavbarElements/calendarIcon.svg";
import { ReactComponent as HistoryIcon } from "../../Images/NavbarElements/historyIcon.svg";
import { ReactComponent as PrescriptionIcon } from "../../Images/NavbarElements/prescriptionIcon.svg";
import { ReactComponent as SettingsIcon } from "../../Images/NavbarElements/settingsIcon.svg";
import { ReactComponent as LogOutIcon } from "../../Images/NavbarElements/logOutIcon.svg";
///import active icons
import { ReactComponent as DashboardActiveIcon } from "../../Images/NavbarActiveElements/dashboardActiveIcon.svg";
import { ReactComponent as ProfileActiveIcon } from "../../Images/NavbarActiveElements/profileActiveIcon.svg";
import { ReactComponent as CalendarActiveIcon } from "../../Images/NavbarActiveElements/calendarActiveIcon.svg";
import { ReactComponent as HistoryActiveIcon } from "../../Images/NavbarActiveElements/historyActiveIcon.svg";
import { ReactComponent as PrescriptionActiveIcon } from "../../Images/NavbarActiveElements/prescriptionActiveIcon.svg";
import { ReactComponent as SettingsActiveIcon } from "../../Images/NavbarActiveElements/settingsActiveIcon.svg";

const Navs = [
  [<DashboardIcon />, <DashboardActiveIcon />, "Dashboard"],
  [<ProfileIcon />, <ProfileActiveIcon />, "Profile"],
  [<CalendarIcon />, <CalendarActiveIcon />, "Appointments"],
  [<HistoryIcon />, <HistoryActiveIcon />, "Medical History"],
  [<PrescriptionIcon />, <PrescriptionActiveIcon />, "Prescriptions"],
  [<SettingsIcon />, <SettingsActiveIcon />, "Settings"]
];

export const DashboardNavbar = ({ active = "Dashboard" }) => {
  return (
    <Container>
      <LogoSection>
        <Logo style={{ cursor: "pointer" }} />
        <h1> SteadCare</h1>
      </LogoSection>
      <NavItems>
        {Navs.map((nav, index) => (
          <NavItem key={index} active={active} item={nav[2]}>
            {active === nav[2] ? <div>{nav[1]}</div> : <div>{nav[0]}</div>}
            <span>
              <h1>{nav[2]}</h1>
            </span>
          </NavItem>
        ))}
      </NavItems>
      <LogOutDiv>
        <NavItem active={active}>
          <div>
            <LogOutIcon />
          </div>
          <span>
            {" "}
            <h1>Log Out</h1>
          </span>
        </NavItem>
      </LogOutDiv>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0px;
  width: 33.2rem;
  height: 100vh;
  max-height: 100vh;
  box-shadow: 0.3rem 0.1rem 0.1rem 0px rgba(0, 0, 255, 0.2);
  background-color: white;
  overflow: hidden;
  z-index: 10;
`;
const LogoSection = styled.div`
  padding-left: 2rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(85, 85, 85, 0.2);
  height: 5em;
  h1 {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.3rem;
    letter-spacing: 0.06em;
    text-align: left;
    color: rgba(0, 0, 255, 0.9);
    text-transform: uppercase;
    margin-left: 0.3rem;
    cursor: pointer;
  }
`;
const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  padding-top: 2.5em;
  height: 65%;
  border-bottom: 1px solid rgba(85, 85, 85, 0.2);
`;
const LogOutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  padding-top: 3em;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  justify-content: space-between;

  div {
    transform: scale(0.55);
    cursor: pointer;
  }
  span {
    width: 70%;
  }
  h1 {
    font-family: Montserrat;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.06em;
    text-align: left;
    margin: 0;
    padding: 0;

    color: ${(props) =>
      props.active === props.item ? "rgba(0, 0, 255, 1)" : "black"};
    cursor: pointer;
  }
`;
