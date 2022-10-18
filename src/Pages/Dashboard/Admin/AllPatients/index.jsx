import React from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { TopBar } from "../component";
import { Body, Container } from "../../style";
import { ReactComponent as PatientIcon } from "../../../../Images/CardIcon/patients_pink.svg";
import { ReactComponent as TotalPatientsIcon } from "../../../../Images/CardIcon/total_patients.svg";
import { ReactComponent as NewPatientsIcon } from "../../../../Images/CardIcon/new_patients.svg";
import { Cards } from "./style";
import { DataCard } from "./components/DataCard";
import { PatientStats } from "./components/PatientStats";
import { PatientList } from "./components/PatientList";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";
import { useState } from "react";

export const AdminPatients = () => {
  const token = useSelector((state) => state.reducer.adminDetails.token);
  const [activePatient, setActivePatient] = useState(0);
  const [totalPatient, setTotalPatient] = useState(0);
  const [newPatient, setNewPatient] = useState(0);

  const setDashboard = (response) => {
    setActivePatient(response.data.data.totalActivePatients);
    setTotalPatient(response.data.data.totalPatients);
    setNewPatient(response.data.data.totalNewPatients);
  };

  useFetch(token, "/admin//patients-dashboard-status", setDashboard);
  return (
    <Container>
      <AdminDashboardNavbar role="admin" active="Patients" />
      <Body>
        <TopBar role="admin" />
        <Cards>
          <DataCard
            icon={<TotalPatientsIcon width={"4rem"} height={"4rem"} />}
            title={"Total Patients"}
            number={totalPatient}
          />
          <DataCard
            icon={<PatientIcon width={"4rem"} height={"4rem"} />}
            title={"Active Patients"}
            number={activePatient}
          />
          <DataCard
            icon={<NewPatientsIcon width={"4rem"} height={"4rem"} />}
            title={"New Patients"}
            number={newPatient}
          />
        </Cards>
        <PatientStats />
        <PatientList />
      </Body>
    </Container>
  );
};
