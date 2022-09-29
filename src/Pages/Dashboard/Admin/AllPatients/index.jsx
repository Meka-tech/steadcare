import React from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { TopBar } from "../../Patient/component";
import { Body, Container } from "../../style";
import { ReactComponent as PatientIcon } from "../../../../Images/CardIcon/patients_pink.svg";
import { ReactComponent as TotalPatientsIcon } from "../../../../Images/CardIcon/total_patients.svg";
import { ReactComponent as NewPatientsIcon } from "../../../../Images/CardIcon/new_patients.svg";
import { Cards } from "./style";
import { DataCard } from "./components/DataCard";
import { PatientStats } from "./components/PatientStats";
import { PatientList } from "./components/PatientList";

export const AdminPatients = () => {
  return (
    <Container>
      <AdminDashboardNavbar role="admin" active="Patients" />
      <Body>
        <TopBar role="admin" />
        <Cards>
          <DataCard
            icon={<TotalPatientsIcon width={"4rem"} height={"4rem"} />}
            title={"Total Patients"}
            number={"0"}
          />
          <DataCard
            icon={<PatientIcon width={"4rem"} height={"4rem"} />}
            title={"Active Patients"}
            number={"0"}
          />
          <DataCard
            icon={<NewPatientsIcon width={"4rem"} height={"4rem"} />}
            title={"New Patients"}
            number="0"
          />
        </Cards>
        <PatientStats />
        <PatientList />
      </Body>
    </Container>
  );
};
