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

export const PatientPrescription = () => {
  const token = useSelector((state) => state.reducer.userDetails.token);
  const [prescription, setPrescription] = useState();
  const [loading, setLoading] = useState(false);

  const FetchPrescriptions = async () => {
    setLoading(true);
    const config = {
      method: "get",
      url: `${BaseUrl}/my-prescriptions`,
      headers: { Authorization: "Bearer " + token }
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        setPrescription(response.data.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    FetchPrescriptions();
  }, []);

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
