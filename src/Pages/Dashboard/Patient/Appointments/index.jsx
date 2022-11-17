import React, { useEffect, useState } from "react";

import { DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main, Title } from "./style";
import { AppointmentList } from "./components";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/API";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";

export const PatientAppointment = () => {
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [appointments, setAppointments] = useState();

  const CallBackFunc = (response) => {
    setAppointments(response.data.data);
  };

  const { loading } = useFetch(token, "/all-doctors-appointment", CallBackFunc);

  return (
    <Container>
      <DashboardNavbar active={"Appointments"} role={"patient"} />
      <Body>
        <TopBar role={"patient"} />
        <Main>
          <Title>Appointments</Title>
          <AppointmentList
            data={appointments}
            loading={loading}
            token={token}
          />
        </Main>
      </Body>
    </Container>
  );
};
