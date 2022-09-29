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
import { ReactComponent as DoctorIcon } from "../../Images/NavbarElements/doctorsIcon.svg";
import { ReactComponent as PatientIcon } from "../../Images/NavbarElements/patientsIcon.svg";
import { ReactComponent as DocumentIcon } from "../../Images/NavbarElements/documentsIcon.svg";
///import active icons
import { ReactComponent as DashboardActiveIcon } from "../../Images/NavbarActiveElements/dashboardActiveIcon.svg";
import { ReactComponent as ProfileActiveIcon } from "../../Images/NavbarActiveElements/profileActiveIcon.svg";
import { ReactComponent as CalendarActiveIcon } from "../../Images/NavbarActiveElements/calendarActiveIcon.svg";
import { ReactComponent as HistoryActiveIcon } from "../../Images/NavbarActiveElements/historyActiveIcon.svg";
import { ReactComponent as PrescriptionActiveIcon } from "../../Images/NavbarActiveElements/prescriptionActiveIcon.svg";
import { ReactComponent as SettingsActiveIcon } from "../../Images/NavbarActiveElements/settingsActiveIcon.svg";
import { ReactComponent as DoctorsActiveIcon } from "../../Images/NavbarActiveElements/doctorsActiveIcon.svg";
import { ReactComponent as PatientsActiveIcon } from "../../Images/NavbarActiveElements/patientActiveIcon.svg";
import { ReactComponent as DocumentsActiveIcon } from "../../Images/NavbarActiveElements/documentsActiveIcon.svg";
import { ReactComponent as Hamburger } from "../../Images/NavbarActiveElements/hamburger_icon.svg";
import { useNavigate } from "react-router";
import { mobile } from "../../Utilities/responsive";

export const DashboardNavbar = ({ active = "Dashboard", role = "Patient" }) => {
  const navigate = useNavigate();
  const Navs = [
    [<DashboardIcon />, <DashboardActiveIcon />, "Dashboard", `/${role}/home`],
    [<ProfileIcon />, <ProfileActiveIcon />, "Profile", `/${role}/profile`],
    [
      <CalendarIcon />,
      <CalendarActiveIcon />,
      "Appointments",
      `/${role}/appointments`
    ],
    [
      <HistoryIcon />,
      <HistoryActiveIcon />,
      "Medical History",
      `/${role}/medical-history`
    ],
    [
      <PrescriptionIcon />,
      <PrescriptionActiveIcon />,
      "Prescriptions",
      `/${role}/prescriptions`
    ],
    [<SettingsIcon />, <SettingsActiveIcon />, "Settings", `/${role}/settings`]
  ];
  return (
    <Container>
      <LogoSection>
        <Logo
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          height={"3.5rem"}
          width={"3.5rem"}
        />
        <h1 onClick={() => navigate("/")}> SteadCare</h1>
      </LogoSection>
      <NavItems>
        {Navs.map((nav, index) => (
          <NavItem
            key={index}
            active={active}
            item={nav[2]}
            onClick={() => navigate(nav[3])}
          >
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
      <HamburgerDiv>
        <Hamburger height={"3.5rem"} width={"3.5rem"} />
      </HamburgerDiv>
    </Container>
  );
};
export const DoctorDashboardNavbar = ({
  active = "Dashboard",
  role = "doctor"
}) => {
  const navigate = useNavigate();
  const Navs = [
    [<DashboardIcon />, <DashboardActiveIcon />, "Dashboard", `/${role}/home`],
    [<ProfileIcon />, <ProfileActiveIcon />, "Profile", `/${role}/profile`],
    [
      <CalendarIcon />,
      <CalendarActiveIcon />,
      "Appointments",
      `/${role}/appointments`
    ],
    [
      <HistoryIcon />,
      <HistoryActiveIcon />,
      "Patient History",
      `/${role}/patient-history`
    ],
    [<SettingsIcon />, <SettingsActiveIcon />, "Settings", `/${role}/settings`]
  ];
  return (
    <Container>
      <LogoSection>
        <Logo
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          height={"3.5rem"}
          width={"3.5rem"}
        />
        <h1 onClick={() => navigate("/")}> SteadCare</h1>
      </LogoSection>
      <NavItems>
        {Navs.map((nav, index) => (
          <NavItem
            key={index}
            active={active}
            item={nav[2]}
            onClick={() => navigate(nav[3])}
          >
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
      <HamburgerDiv>
        <Hamburger height={"3.5rem"} width={"3.5rem"} />
      </HamburgerDiv>
    </Container>
  );
};

export const AdminDashboardNavbar = ({
  active = "Dashboard",
  role = "admin"
}) => {
  const navigate = useNavigate();
  const Navs = [
    [<DashboardIcon />, <DashboardActiveIcon />, "Dashboard", `/${role}/home`],
    [<DoctorIcon />, <DoctorsActiveIcon />, "Doctors", `/${role}/doctors`],
    [<PatientIcon />, <PatientsActiveIcon />, "Patients", `/${role}/patients`],
    [
      <DocumentIcon />,
      <DocumentsActiveIcon />,
      "Documents",
      `/${role}/documents`
    ],
    [<SettingsIcon />, <SettingsActiveIcon />, "Settings", `/${role}/settings`]
  ];
  return (
    <Container>
      <LogoSection>
        <Logo
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          height={"3.5rem"}
          width={"3.5rem"}
        />
        <h1 onClick={() => navigate("/")}> SteadCare</h1>
      </LogoSection>
      <NavItems>
        {Navs.map((nav, index) => (
          <NavItem
            key={index}
            active={active}
            item={nav[2]}
            onClick={() => navigate(nav[3])}
          >
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
      <HamburgerDiv>
        <Hamburger height={"3.5rem"} width={"3.5rem"} />
      </HamburgerDiv>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem 0px;
  width: 33.2rem;
  height: 100vh;
  max-height: 100vh;
  box-shadow: 0.3rem 0.1rem 0.1rem 0px rgba(0, 0, 255, 0.2);
  background-color: white;
  overflow: hidden;
  z-index: 200;
  ${mobile({
    width: "100vw",
    backgroundColor: "rgba(246, 246, 246, 1)",
    height: "5rem",
    display: "flex",
    maxHeight: "5rem",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem"
  })}
`;
const LogoSection = styled.div`
  box-sizing: border-box;
  padding-left: 2rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(85, 85, 85, 0.2);
  height: 4rem;
  ${mobile({
    height: "fit-content",
    paddingLeft: "0",
    borderBottom: "none"
  })}
  h1 {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-align: left;
    color: rgba(0, 0, 255, 0.9);
    text-transform: uppercase;
    margin-left: 0.3rem;
    cursor: pointer;
    ${mobile({
      letterSpacing: "0"
    })}
  }
`;
const NavItems = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  padding-top: 2.5em;
  height: 80%;
  border-bottom: 1px solid rgba(85, 85, 85, 0.2);
  ${mobile({
    display: "none"
  })}
`;
const LogOutDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  padding-top: 2rem;
  ${mobile({
    display: "none"
  })}
`;
const NavItem = styled.div`
  box-sizing: border-box;
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

const HamburgerDiv = styled.div`
  width: fit-content;
  height: fit-content;
  display: none;
  ${mobile({
    display: "flex"
  })}
`;
