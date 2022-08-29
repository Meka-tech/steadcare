import React, { useState } from "react";

import { DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main } from "./style";

export const PatientMedicalHistory = () => {
  return (
    <Container>
      <DashboardNavbar active={"Medical History"} role={"patient"} />
      <Body>
        <TopBar />
        <Main></Main>
      </Body>
    </Container>
  );
};
