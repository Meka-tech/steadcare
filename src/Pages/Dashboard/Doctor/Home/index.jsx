import React, { useEffect, useState } from "react";

import { Button, DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container, Banner } from "../../style";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import { TopBar } from "../component";

import { Capitalize } from "../../../../Utilities/globalFunc";
import { useSelector } from "react-redux";
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

export const DoctorDashboard = () => {
  const user = useSelector((state) => state.reducer.doctorDetails.name);
  const [sendInvite, setSendInvite] = useState(false);

  const noOfAppointments = useSelector(
    (state) => state.reducer.appointments.amount
  );
  const navigate = useNavigate();
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

        <TopBar />
        <Banner>
          <div>
            <span>
              <h1>Welcome {Capitalize(user)} !</h1>
              <h3>
                Care for your health better with Us. Let’s be your gateway to
                steady medical care.
              </h3>
              <h2>Upcoming Sessions : {noOfAppointments}</h2>
            </span>
          </div>
          <div>
            <DoctorSvg />
          </div>
        </Banner>
        <Cards>
          <DataCard
            icon={<PatientIcon width={"4rem"} height={"4rem"} />}
            title={"Patient"}
            number="0"
          />
          <DataCard
            icon={<Naira width={"4rem"} height={"4rem"} />}
            title={"Income"}
            number="0"
            money={true}
          />
          <DataCard
            icon={<AppointmentIcon width={"4rem"} height={"4rem"} />}
            title={"Appointments"}
            number="0"
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
`;
const AppointmentTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;
const AppointmentViewAll = styled.h1`
  cursor: pointer;
  color: blue;
  font-weight: 500;
  font-size: 1.6rem;
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
`;
