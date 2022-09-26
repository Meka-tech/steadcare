import React, { useEffect, useState } from "react";

import { DashboardNavbar, DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main, Title } from "./style";
import { AppointmentList } from "./components";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/API";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";

export const DoctorAppointment = () => {
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [appointments, setAppointments] = useState();

  const CallBackFunc = (response) => {
    setAppointments(response.data.data);
    console.log(response.data.data);
  };

  const { loading } = useFetch(token, "/all-doctors-appointment", CallBackFunc);

  const MockData = [
    ["Chineye Matu", "16-06-2022", "10:00am", "Completed"],
    ["Luther Ope", "18-06-2022", "10:00am", "Pending"],
    ["Luther Ope", "20-06-2022", "10:00am", "Declined"],
    ["Luther Ope", "20-06-2022", "10:00am", "Completed"],
    ["Luther Ope", "20-06-2022", "10:00am", "Pending"],
    ["Luther Ope", "20-06-2022", "10:00am", "Completed"],
    ["Luther Ope", "20-06-2022", "10:00am", "Pending"]
  ];
  return (
    <Container>
      <DoctorDashboardNavbar active={"Appointments"} role={"doctor"} />
      <Body>
        <TopBar />
        <Main>
          <Title>Appointments</Title>
          <AppointmentList data={appointments} loading={loading} />
        </Main>
      </Body>
    </Container>
  );
};
