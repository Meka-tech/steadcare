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
    "/get-my-appoinments?pageNo=1&noOfRequests=2",
    CallBackFunc
  );
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
        <TopBar role={"doctor"} />
        <Main>
          <Title>Appointments</Title>
          <AppointmentList data={appointments} loading={loading} />
        </Main>
      </Body>
    </Container>
  );
};
