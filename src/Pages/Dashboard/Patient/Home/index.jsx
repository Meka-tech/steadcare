import React, { useEffect, useState } from "react";

import { Button, DashboardNavbar } from "../../../../Components";
import { Body, Container, Banner } from "../../style";
import { useNavigate } from "react-router-dom";
import { BottomNavs, Doctors, TopDoctors } from "./style";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import {
  BookADoctor,
  DoctorComponent,
  InviteModal,
  SendInvite
} from "./components";
import { Spinner, TopBar } from "../component";
import { useDispatch, useSelector } from "react-redux";
import { Capitalize } from "../../../../Utilities/globalFunc";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/API";
import { updateNumberOfAppointment } from "../../../../features/userAppointments/appointmentSlice";
import useFetch from "../../../../hooks/useFetch";

export const PatientDashboard = () => {
  const [viewAll, setViewAll] = useState(false);
  const [sendInvite, setSendInvite] = useState(false);
  const user = useSelector((state) => state.reducer.patientDetails.name);
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [doctors, setDoctors] = useState();
  const dispatch = useDispatch();
  const noOfAppointments = useSelector(
    (state) => state.reducer.appointments.amount
  );

  const SetDoctor = (response) => {
    setDoctors(response.data.data);
  };
  const UpdatAppointmentNo = (response) => {
    dispatch(updateNumberOfAppointment(response?.data.data.length));
  };

  useFetch(token, "/all-doctors-appointment", UpdatAppointmentNo);

  const { loading } = useFetch(token, "/top-doctors", SetDoctor);
  return (
    <Container>
      <DashboardNavbar role="patient" />
      <Body>
        {sendInvite && (
          <InviteModal
            setActive={setSendInvite}
            value={"https://steadcare.com/invite/a09St31D"}
          />
        )}
        <TopBar role={"patient"} />
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
            <DoctorSvg width={"27rem"} height={"27rem"} />
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
            {loading && <Spinner />}
            {doctors?.map((data, index) => {
              return (
                <DoctorComponent
                  key={index}
                  rating={`${data.averageRating}`}
                  name={`${data.accountName}`}
                />
              );
            })}
          </Doctors>
        </TopDoctors>
        <BottomNavs>
          <BookADoctor />
          <SendInvite setActive={setSendInvite} />
        </BottomNavs>
      </Body>
    </Container>
  );
};
