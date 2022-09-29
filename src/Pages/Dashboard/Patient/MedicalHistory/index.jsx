import React, { useState } from "react";

import { DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main } from "./style";
import { MediacalHistory, MediacalHistoryInquiry } from "./components";

export const PatientMedicalHistory = () => {
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
          <MediacalHistory />
          <MediacalHistoryInquiry />
        </Main>
      </Body>
    </Container>
  );
};
