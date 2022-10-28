import React, { useState } from "react";

import { DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main } from "./style";
import { MediacalHistory, MediacalHistoryInquiry } from "./components";
import useFetch from "../../../../hooks/useFetch";
import { useSelector } from "react-redux";

export const DoctorPatientHistory = () => {
  const token = useSelector((state) => state.reducer.doctorDetails.token);
  const [patientsHistory, setPatientsHistory] = useState();
  const MockData = [
    ["Chineye Matu", "Cancer", "16-06-2022"],
    ["Luther Ope", "Cancer", "18-06-2022"],
    ["Luther Ope", "Cancer", "20-06-2022"]
  ];
  const MockData2 = [
    ["Chineye Matu", "Granted", "16-06-2022"],
    ["Luther Ope", "Declined", "18-06-2022"],
    ["Luther Ope", "Declined", "20-06-2022"]
  ];
  const SetPatientHistory = (response) => {
    setPatientsHistory(response.data.data.fetchedData);
  };
  useFetch(token, "/get-all-medical-history", SetPatientHistory);
  return (
    <Container>
      <DoctorDashboardNavbar active={"Patient History"} role={"doctor"} />
      <Body>
        <TopBar role={"doctor"} />
        <Main>
          <MediacalHistory data={patientsHistory} />
        </Main>
      </Body>
    </Container>
  );
};
