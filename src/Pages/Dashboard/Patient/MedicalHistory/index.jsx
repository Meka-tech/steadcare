import React, { useState } from "react";

import { DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main } from "./style";
import { MediacalHistory, MediacalHistoryInquiry } from "./components";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";

export const PatientMedicalHistory = () => {
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [medicalHistory, setMedicalHistory] = useState();

  const CallBackFunc = (response) => {
    setMedicalHistory(response.data.data.fetchedData);
  };

  const { loading } = useFetch(
    token,
    "/view-all-medication-history",
    CallBackFunc
  );

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
  return (
    <Container>
      <DashboardNavbar active={"Medical History"} role={"patient"} />
      <Body>
        <TopBar role={"patient"} />
        <Main>
          <MediacalHistory data={medicalHistory} loading={loading} />
          <MediacalHistoryInquiry />
        </Main>
      </Body>
    </Container>
  );
};
