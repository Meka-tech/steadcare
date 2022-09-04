import React, { useEffect, useState } from "react";

import { Button, DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { BottomNavs, Doctors, TopDoctors, Banner } from "./style";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import { TopBar } from "../component";
import { useSelector } from "react-redux";
import { Capitalize } from "../../../../Utilities/globalFunc";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/API";

export const BookADoctorPage = () => {
  return (
    <Container>
      <DashboardNavbar role="patient" />
      <Body>
        <TopBar />
      </Body>
    </Container>
  );
};
