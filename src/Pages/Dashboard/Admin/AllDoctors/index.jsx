import React from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { TopBar } from "../../Patient/component";
import { Body, Container } from "../../style";
import { ReactComponent as DisabledDoctorIcon } from "../../../../Images/CardIcon/disabled_doctor.svg";
import { ReactComponent as PendingDoctorIcon } from "../../../../Images/CardIcon/pending_doctor.svg";
import { ReactComponent as TotalDoctorIcon } from "../../../../Images/CardIcon/total_doctor.svg";
import { Cards } from "./style";
import { DataCard } from "./components/DataCard";
import { DoctorList } from "./components/DoctorList";

export const AdminDoctors = () => {
  return (
    <Container>
      <AdminDashboardNavbar role="admin" active="Doctors" />
      <Body>
        <TopBar role="admin" />
        <Cards>
          <DataCard
            icon={<TotalDoctorIcon width={"4rem"} height={"4rem"} />}
            title={"Total Doctors"}
            number={"0"}
          />
          <DataCard
            icon={<DisabledDoctorIcon width={"4rem"} height={"4rem"} />}
            title={"Disabled Doctors"}
            number={"0"}
          />
          <DataCard
            icon={<PendingDoctorIcon width={"4rem"} height={"4rem"} />}
            title={"Pending Doctors"}
            number="0"
          />
        </Cards>
        <DoctorList />
      </Body>
    </Container>
  );
};
