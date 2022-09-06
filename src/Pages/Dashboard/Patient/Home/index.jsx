import React, { useEffect, useState } from "react";

import { Button, DashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { BottomNavs, Doctors, TopDoctors, Banner } from "./style";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import {
  BookADoctor,
  DoctorComponent,
  InviteModal,
  SendInvite
} from "./components";
import { Spinner, TopBar } from "../component";
import { useSelector } from "react-redux";
import { Capitalize } from "../../../../Utilities/globalFunc";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/API";

export const PatientDashboard = () => {
  const [viewAll, setViewAll] = useState(false);
  const [sendInvite, setSendInvite] = useState(false);
  const user = useSelector((state) => state.reducer.userDetails.name);
  const token = useSelector((state) => state.reducer.userDetails.token);
  const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(false);

  const TopDoctorsFunc = async () => {
    setLoading(true);
    const config = {
      method: "get",
      url: `${BaseUrl}/top-doctors`,
      headers: { Authorization: "Bearer " + token }
    };

    axios(config)
      .then(function (response) {
        setDoctors(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    TopDoctorsFunc();
  }, []);

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
        <TopBar />
        <Banner>
          <div>
            <span>
              <h1>Welcome {Capitalize(user)} !</h1>
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
