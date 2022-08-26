import React, { useState } from "react";

import { Button, DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { BottomNavs, Doctors, TopDoctors, Banner } from "./style";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import { BookADoctor, DoctorComponent, SendInvite } from "./components";
import { TopBar } from "../component";

export const PatientDashboard = () => {
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <DashboardNavbar />
      <Body>
        <TopBar />
        <Banner>
          <div>
            <span>
              <h1>Welcome Lewin Oke !</h1>
              <h3>
                Care for your health better with Us. Let’s be your gateway to
                steady medical care.
              </h3>
              <h2>Upcoming Sessions : 0</h2>
            </span>
          </div>
          <div>
            <DoctorSvg />
          </div>
        </Banner>
        <TopDoctors>
          <span>
            <h1>Top Doctors</h1>
            <h3 onClick={() => setViewAll(!viewAll)}>
              {viewAll ? "View less" : "View all"}
            </h3>
          </span>
          <Doctors viewAll={viewAll}>
            <DoctorComponent rating={"5.0"} name={"Dr Yusef Ama"} />
            <DoctorComponent rating={"5.0"} name={"Dr Yusef Ama"} />
            <DoctorComponent rating={"5.0"} name={"Dr Yusef Ama"} />
            <DoctorComponent rating={"5.0"} name={"Dr Yusef Ama"} />
            <DoctorComponent rating={"5.0"} name={"Dr Yusef Ama"} />
            <DoctorComponent rating={"5.0"} name={"Dr Yusef Ama"} />
            <DoctorComponent rating={"5.0"} name={"Dr Yusef Ama"} />
          </Doctors>
        </TopDoctors>
        <BottomNavs>
          <BookADoctor />
          <SendInvite />
        </BottomNavs>
      </Body>
    </Container>
  );
};
