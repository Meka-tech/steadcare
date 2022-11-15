import React, { useEffect, useState } from "react";

import { Button, DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container, Banner } from "../../style";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import { TopBar } from "../component";

import { Capitalize } from "../../../../Utilities/globalFunc";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  AppointmentRequests,
  DataCard,
  GenderChart,
  InviteModal,
  RevenueCard,
  SendInvite
} from "./components";
import { ReactComponent as Naira } from "../../../../Images/CardIcon/naira.svg";
import { ReactComponent as PatientIcon } from "../../../../Images/CardIcon/patients_pink.svg";
import { ReactComponent as AppointmentIcon } from "../../../../Images/CardIcon/appointment.svg";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import useFetch from "../../../../hooks/useFetch";
import { mobile } from "../../../../Utilities/responsive";
import { useIsMobile } from "../../../../hooks/useIsMobile";

export const DoctorDashboard = () => {
  const user = useSelector((state) => state.reducer.doctorDetails.name);
  const token = useSelector((state) => state.reducer.doctorDetails.token);
  const [sendInvite, setSendInvite] = useState(false);
  const [patientsCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);

  const IsMobile = useIsMobile();

  const navigate = useNavigate();

  const SetStats = (response) => {
    setPatientCount(response.data.data.patientsCount);
    setAppointmentCount(response.data.data.appointmentCount);
  };

  useFetch(token, "/docs-dasboard-statistics", SetStats);
  return (
    <Container>
      <DoctorDashboardNavbar />
      <Body>
        {sendInvite && (
          <InviteModal
            setActive={setSendInvite}
            value={"https://steadcare.com/invite/a09St31D"}
          />
        )}

        <TopBar role={"doctor"} />
        <Banner>
          <div>
            <span>
              <h1>Welcome {Capitalize(user)} !</h1>
              <h3>
                Care for your health better with Us. Let’s be your gateway to
                steady medical care.
              </h3>
              <h2>Upcoming Sessions : {appointmentCount}</h2>
            </span>
          </div>
          <div>
            <DoctorSvg width={"27rem"} height={"27rem"} />
          </div>
        </Banner>
        <Cards>
          <DataCard
            icon={
              <PatientIcon
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Patient"}
            number={patientsCount}
          />
          <DataCard
            icon={
              <Naira
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Income"}
            number="0"
            money={true}
          />
          <DataCard
            icon={
              <AppointmentIcon
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Appointments"}
            number={appointmentCount}
          />
        </Cards>
        <AppointmentHeader>
          <AppointmentTitle>Appointment Requests</AppointmentTitle>
          <AppointmentViewAll onClick={() => navigate("/doctor/appointments")}>
            view all
          </AppointmentViewAll>
        </AppointmentHeader>
        <Grid>
          <AppointmentRequests />
          <GenderChart />
          <RevenueCard />
          <SendInvite setActive={setSendInvite} />
        </Grid>
      </Body>
    </Container>
  );
};

const AppointmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-right: auto;
  padding-left: 5rem;
  width: 45%;
  ${mobile({ width: "80%", marginBottom: "2rem" })}
`;
const AppointmentTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  ${mobile({ fontSize: "1.6rem" })}
`;
const AppointmentViewAll = styled.h1`
  cursor: pointer;
  color: blue;
  font-weight: 500;
  font-size: 1.6rem;
  ${mobile({ fontSize: "1.2rem" })}
`;

const Cards = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 255, 0.02);
  margin: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 5rem;
  ${mobile({
    padding: "1rem 2rem",
    margin: "4rem 0"
  })}
`;

const Grid = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 3rem;
  margin-bottom: 5rem;
  padding: 0 5rem;
  grid-column-gap: 2rem;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    marginBottom: "10rem",
    padding: "0 2rem"
  })}
`;
