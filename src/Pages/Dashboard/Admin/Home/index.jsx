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
import { AllAppointment } from "./components/AllAppointment";
import { MonthlyVisitor } from "./components/MonthlyVisitor";

export const AdminDashboard = () => {
  return (
    <Container>
      <AdminDashboardNavbar role="admin" />
      <Body>
        <TopBar role="admin" />
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
          <DataCard
            icon={<TotalAppointmentIcon width={"4rem"} height={"4rem"} />}
            title={"Total Appointments"}
            number={"0"}
          />
          <DataCard
            icon={<CancelledAppointmentIcon width={"4rem"} height={"4rem"} />}
            title={"Cancelled Appointments"}
            number="0"
          />
          <DataCard
            icon={<TotalVisitorsIcon width={"4rem"} height={"4rem"} />}
            title={"Total Visitors"}
            number={"0"}
          />
        </Cards>
        <AllAppointment />
        <MonthlyVisitor />
      </Body>
    </Container>
  );
};
