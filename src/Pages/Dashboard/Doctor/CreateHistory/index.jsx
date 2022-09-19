import React, { useState } from "react";

import { DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main, Title } from "./style";
import { CreateMedicalHistoryForm } from "./components";

export const DoctorCreateHistory = () => {
  return (
    <Container>
      <DoctorDashboardNavbar active={"Patient History"} role={"doctor"} />
      <Body>
        <TopBar />
        <Main>
          <Title>Create Medical History</Title>
          <CreateMedicalHistoryForm />
        </Main>
      </Body>
    </Container>
  );
};
