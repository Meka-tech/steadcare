import React, { useEffect, useState } from "react";

import { DashboardNavbar, DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main, Title } from "./style";
import { AppointmentList } from "./components";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";

export const DoctorAppointment = () => {
  const token = useSelector((state) => state.reducer.doctorDetails.token);
  const [appointments, setAppointments] = useState();

  const CallBackFunc = (response) => {
    setAppointments(response.data.data.fetchedData);
  };

  const { loading } = useFetch(
    token,
    "/get-my-appoinments?pageNo=1&noOfRequests=10",
    CallBackFunc
  );
  return (
    <Container>
      <DoctorDashboardNavbar active={"Appointments"} role={"doctor"} />
      <Body>
        <TopBar role={"doctor"} />
        <Main>
          <Title>Appointments</Title>
          <AppointmentList data={appointments} loading={loading} />
        </Main>
      </Body>
    </Container>
  );
};
