import React, { useEffect, useState } from "react";

import {
  Button,
  DashboardNavbar,
  Dropdown,
  ProgressBar
} from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import {
  BottomNavs,
  Doctors,
  TopDoctors,
  Banner,
  DoctorGrid,
  Header,
  ProgressDiv,
  Title
} from "./style";
import { ReactComponent as DoctorSvg } from "../../../../Images/illustrations/doctors.svg";
import { Spinner, TopBar } from "../component";
import { useSelector } from "react-redux";
import { Capitalize } from "../../../../Utilities/globalFunc";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/API";
import { Main } from "./style";
import { DoctorCardItem } from "./component";

export const BookADoctorPage = () => {
  const token = useSelector((state) => state.reducer.userDetails.token);
  const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState("");
  const Specialties = [
    "Allergist",
    "Anesthesiologist",
    "Cardiologist",
    " Dermatologist",
    "Endocrinologist",
    "Gastroeterologist",
    "Gynecologist",
    "Nephrologist",
    "Neurologist",
    "Radiologist",
    "Rheumatologist",
    "Oncologist",
    "Ophthalmologist",
    "Otolaryngologist",
    "Psychiatrist",
    "Pulmonologist",
    " Surgeon"
  ];

  const AllDoctorsFunc = async () => {
    setLoading(true);
    const config = {
      method: "get",
      url: `${BaseUrl}/view-all-doctors`,
      headers: { Authorization: "Bearer " + token }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setDoctors(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    AllDoctorsFunc();
  }, []);

  return (
    <Container>
      <DashboardNavbar role="patient" />
      <Body>
        <TopBar />
        <Main>
          <ProgressDiv>
            <ProgressBar steps={[0, 0, 0, 0]} step={1} />
          </ProgressDiv>
          <Title>Choose a Doctor</Title>
          <Header>
            <Dropdown
              label="Choose speciality"
              bgColor={"white"}
              items={Specialties}
              onSelect={setSpecialty}
              selectedItem={specialty}
            />
            <Button
              bgColor={"rgba(217, 217, 217, 0.7)"}
              color="rgba(0, 0, 255, 1)"
              border={" 1px solid rgba(0, 0, 255, 1)"}
              text="Filter list"
              fontSize="1.2rem"
              width={"100%"}
            />
          </Header>
          <DoctorGrid>
            {doctors?.map((data, index) => {
              return (
                <DoctorCardItem
                  key={index}
                  rating={`${data.averageRating}`}
                  name={`${data.name}`}
                  specialty={`${data.specialty}`}
                />
              );
            })}
            {loading && <Spinner />}
          </DoctorGrid>
        </Main>
      </Body>
    </Container>
  );
};
