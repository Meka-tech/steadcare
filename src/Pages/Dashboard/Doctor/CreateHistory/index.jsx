import React, { useState } from "react";

import { DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";

import { Main, Title } from "./style";
import { CreateMedicalHistoryForm } from "./components";
import { TopBar } from "../component";

export const DoctorCreateHistory = () => {
  return (
    <Container>
      <DoctorDashboardNavbar active={"Patient History"} role={"doctor"} />
      <Body>
        <TopBar role={"doctor"} />
        <Main>
          <Title>Create Medical History</Title>
          <CreateMedicalHistoryForm />
        </Main>
      </Body>
    </Container>
  );
};
