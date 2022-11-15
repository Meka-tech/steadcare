import React, { useState } from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { TopBar } from "../component";
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
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";
import { useIsMobile } from "../../../../hooks/useIsMobile";

export const AdminDashboard = () => {
  const token = useSelector((state) => state.reducer.adminDetails.token);
  const [totalDoctor, setTotalDoctors] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [cancelledAppointment, setCancelledAppointments] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  const SetStats = (response) => {
    setTotalDoctors(response.data.data.doctorCount);
    setTotalPatients(response.data.data.patientCount);
    setTotalAppointments(response.data.data.totalAppointments);
    setCancelledAppointments(response.data.data.totalCanceledAppointments);
    setTotalVisitors(response.data.data.totalVisitors);
  };

  useFetch(token, "/admin/dashboard-statistics", SetStats);

  const IsMobile = useIsMobile();
  return (
    <Container>
      <AdminDashboardNavbar role="admin" />
      <Body>
        <TopBar role="admin" />
        <Cards>
          <DataCard
            icon={
              <TotalDoctorIcon
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Total Doctors"}
            number={totalDoctor}
          />
          <DataCard
            icon={
              <PatientIcon
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Total Patients"}
            number={totalPatients}
          />
          <DataCard
            icon={
              <Naira
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Total Earnings"}
            number={totalEarnings}
            money={true}
          />
          <DataCard
            icon={
              <TotalAppointmentIcon
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Total Appointments"}
            number={totalAppointments}
          />
          <DataCard
            icon={
              <CancelledAppointmentIcon
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Cancelled Appointments"}
            number={cancelledAppointment}
          />
          <DataCard
            icon={
              <TotalVisitorsIcon
                width={IsMobile ? "3rem" : "4rem"}
                height={IsMobile ? "3rem" : "4rem"}
              />
            }
            title={"Total Visitors"}
            number={totalVisitors}
          />
        </Cards>
        <AllAppointment />
        <MonthlyVisitor />
      </Body>
    </Container>
  );
};
