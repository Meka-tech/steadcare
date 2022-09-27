import React from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { TopBar } from "../../Patient/component";
import { Body, Container } from "../../style";
import { ReactComponent as Naira } from "../../../../Images/CardIcon/naira.svg";
import { ReactComponent as PatientIcon } from "../../../../Images/CardIcon/patients_pink.svg";
import { ReactComponent as AppointmentIcon } from "../../../../Images/CardIcon/appointment.svg";
import { ReactComponent as TotalDoctorIcon } from "../../../../Images/CardIcon/total_doctor.svg";
import { ReactComponent as TotalAppointmentIcon } from "../../../../Images/CardIcon/total_appointment.svg";
import { ReactComponent as CancelledAppointmentIcon } from "../../../../Images/CardIcon/cancelled_appointment.svg";
import { ReactComponent as TotalVisitorsIcon } from "../../../../Images/CardIcon/total_visitors.svg";
import { Cards } from "./style";
import { DataCard } from "./components/DataCard";
import { AllAppointment, DoctorList } from "./components/DoctorList";

export const AdminDoctors = () => {
  return (
    <Container>
      <AdminDashboardNavbar role="admin" active="Doctors" />
      <Body>
        <TopBar />
        <Cards>
          <DataCard
            icon={<TotalDoctorIcon width={"4rem"} height={"4rem"} />}
            title={"Total Doctors"}
            number={"0"}
          />
          <DataCard
            icon={<PatientIcon width={"4rem"} height={"4rem"} />}
            title={"Total Patients"}
            number={"0"}
          />
          <DataCard
            icon={<Naira width={"4rem"} height={"4rem"} />}
            title={"Total Earnings"}
            number="0"
            money={true}
          />
        </Cards>
        <DoctorList />
      </Body>
    </Container>
  );
};
