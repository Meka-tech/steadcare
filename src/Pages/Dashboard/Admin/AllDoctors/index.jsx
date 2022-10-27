import React from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { TopBar } from "../component";
import { Body, Container } from "../../style";
import { ReactComponent as DisabledDoctorIcon } from "../../../../Images/CardIcon/disabled_doctor.svg";
import { ReactComponent as PendingDoctorIcon } from "../../../../Images/CardIcon/pending_doctor.svg";
import { ReactComponent as TotalDoctorIcon } from "../../../../Images/CardIcon/total_doctor.svg";
import { Cards } from "./style";
import { DataCard } from "./components/DataCard";
import { DoctorList } from "./components/DoctorList";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";
import { useState } from "react";

export const AdminDoctors = () => {
  const token = useSelector((state) => state.reducer.adminDetails.token);
  const [disabledDoctor, setDisabledDoctor] = useState(0);
  const [doctor, setDoctor] = useState(0);
  const [pendingDoctor, setPendingDoctor] = useState(0);

  const SetDoctorStats = (response) => {
    setDisabledDoctor(response.data.data.disabledDoctorCount);
    setDoctor(response.data.data.doctorCount);
    setPendingDoctor(response.data.data.pendingDoctorsCount);
    useFetch(token, "/admin/doctors-dashboard", SetDoctorStats);
  };
  useFetch(token, "/admin/doctors-dashboard", SetDoctorStats);

  return (
    <Container>
      <AdminDashboardNavbar role="admin" active="Doctors" />
      <Body>
        <TopBar role="admin" />
        <Cards>
          <DataCard
            icon={<TotalDoctorIcon width={"4rem"} height={"4rem"} />}
            title={"Total Doctors"}
            number={doctor}
          />
          <DataCard
            icon={<DisabledDoctorIcon width={"4rem"} height={"4rem"} />}
            title={"Disabled Doctors"}
            number={disabledDoctor}
          />
          <DataCard
            icon={<PendingDoctorIcon width={"4rem"} height={"4rem"} />}
            title={"Pending Doctors"}
            number={pendingDoctor}
          />
        </Cards>
        <DoctorList />
      </Body>
    </Container>
  );
};
