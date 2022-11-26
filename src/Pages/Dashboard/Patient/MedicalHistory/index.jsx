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
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [medicalHistoryReq, setMedicalHistoryReq] = useState([]);

  const CallBackFunc = (response) => {
    setMedicalHistory(response.data.data.fetchedData);
  };

  const CallBackFuncTwo = (response) => {
    setMedicalHistoryReq(response.data.data);
    console.log(response);
  };

  const { loading } = useFetch(
    token,
    "/view-all-medication-history",
    CallBackFunc
  );

  const { loading: loadingTwo } = useFetch(
    token,
    "/fetch-medical-history-request",
    CallBackFuncTwo
  );

  return (
    <Container>
      <DashboardNavbar active={"Medical History"} role={"patient"} />
      <Body>
        <TopBar role={"patient"} />
        <Main>
          <MediacalHistory data={medicalHistory} loading={loading} />
          <MediacalHistoryInquiry
            data={medicalHistoryReq}
            loading={loadingTwo}
          />
        </Main>
      </Body>
    </Container>
  );
};
