import React, { useEffect, useState } from "react";

import { Button, DoctorDashboardNavbar } from "../../../../Components";
import { Body, Container, Banner } from "../../style";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import { TopBar } from "../component";

import { Capitalize } from "../../../../Utilities/globalFunc";
import { useSelector } from "react-redux";

export const DoctorDashboard = () => {
  const user = useSelector((state) => state.reducer.doctorDetails.name);
  const noOfAppointments = useSelector(
    (state) => state.reducer.appointments.amount
  );

  return (
    <Container>
      <DoctorDashboardNavbar />
      <Body>
        <TopBar />
        <Banner>
          <div>
            <span>
              <h1>Welcome {Capitalize(user)} !</h1>
              <h3>
                Care for your health better with Us. Let’s be your gateway to
                steady medical care.
              </h3>
              <h2>Upcoming Sessions : {noOfAppointments}</h2>
            </span>
          </div>
          <div>
            <DoctorSvg />
          </div>
        </Banner>
      </Body>
    </Container>
  );
};
