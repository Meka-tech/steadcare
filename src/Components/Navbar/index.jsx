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

const Navs = [
  [<DashboardIcon />, "Dashboard"],
  [<ProfileIcon />, "Profile"],
  [<CalendarIcon />, "Appointments"],
  [<HistoryIcon />, "Medical History"],
  [<PrescriptionIcon />, "Prescriptions"],
  [<SettingsIcon />, "Settings"],
];

export const DashboardNavbar = ({ active }) => {
  return (
    <Container>
      <LogoSection>
        <Logo style={{ cursor: "pointer" }} />
        <h1> SteadCare</h1>
      </LogoSection>
      <NavItems>
        {Navs.map((nav, index) => (
          <NavItem key={index}>
            <div>{nav[0]}</div>
            <h1>{nav[1]}</h1>
          </NavItem>
        ))}
      </NavItems>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 0px;
  width: 270px;
  height: 100vh;
  box-shadow: 3px 1px 1px 0px rgba(0, 0, 255, 0.2);
  background-color: white;
`;
const LogoSection = styled.div`
  padding-left: 20px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(85, 85, 85, 0.2);
  height: 9%;
  h1 {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-align: left;
    color: rgba(0, 0, 255, 0.9);
    text-transform: uppercase;
    margin-left: 3px;
    cursor: pointer;
  }
`;
const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 20px;
  height: 60%;
  border-bottom: 1px solid rgba(85, 85, 85, 0.2);
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 40px;
    transform: scale(0.7);
    cursor: pointer;
  }
  h1 {
    font-family: Montserrat;
    font-size: 14.5px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.06em;
    text-align: left;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;
