import React, { useState } from "react";

import { DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { Main, Title } from "./style";
import { PrescriptionList } from "./components";
import axios from "axios";
import { useEffect } from "react";
import { BaseUrl } from "../../../../Utilities/API";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";

export const PatientPrescription = () => {
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [prescription, setPrescription] = useState();

  const CallBackFunction = (response) => {
    setPrescription(response.data.data);
  };

  const { loading } = useFetch(token, "/my-prescriptions", CallBackFunction);

  return (
    <Container>
      <DashboardNavbar active={"Prescriptions"} role={"patient"} />
      <Body>
        <TopBar />
        <Main>
          <Title>Prescriptions</Title>
          <PrescriptionList data={prescription} loading={loading} />
        </Main>
      </Body>
    </Container>
  );
};
