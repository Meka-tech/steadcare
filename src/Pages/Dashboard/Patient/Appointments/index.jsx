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

export const PatientAppointment = () => {
  const token = useSelector((state) => state.reducer.userDetails.token);
  const [appointments, setAppointments] = useState();
  const [loading, setLoading] = useState(false);

  const FetchAppointnents = async () => {
    setLoading(true);
    const config = {
      method: "get",
      url: `${BaseUrl}/all-doctors-appointment`,
      headers: { Authorization: "Bearer " + token }
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        setAppointments(response.data.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    FetchAppointnents();
  }, []);

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
      <DashboardNavbar active={"Appointments"} role={"patient"} />
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
