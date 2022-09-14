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
  Title,
  ViewProfileDiv,
  DateAndTime,
  DateAndTimeButton,
  DateAndTimeFooter,
  CalendarDiv,
  TimeDiv,
  TimeNumber,
  PatientForm,
  ComplaintFormHeader,
  SuccessDiv,
  ImageContainer
} from "./style";
import { Spinner, TopBar } from "../component";
import { useSelector } from "react-redux";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/API";
import { Main } from "./style";
import { DoctorCardItem, ViewProfile } from "./component";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ComplaintInput, InputComponent } from "./inputComponent";
import { Capitalize } from "../../../../Utilities/globalFunc";
import approveBadge from "../../../../Images/approveBadge.png";

export const BookADoctorPage = () => {
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState("");
  const [viewProfileActive, setViewProfileActive] = useState(false);
  const [doctorIndex, setDoctorIndex] = useState();
  const [doctorName, setDoctorName] = useState("");
  const [progressBarStep, setProgressBarStep] = useState(1);
  const [date, onChangeDate] = useState(new Date());
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

  const Book = () => {
    setProgressBarStep(2);
  };
  const AllDoctorsFunc = async () => {
    setLoading(true);
    const config = {
      method: "get",
      url: `${BaseUrl}/view-all-doctors`,
      headers: { Authorization: "Bearer " + token }
    };

    axios(config)
      .then(function (response) {
        setDoctors(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    AllDoctorsFunc();
  }, []);
  useEffect(() => {
    if (doctorIndex !== undefined) {
      setDoctorName(doctors[doctorIndex].name);
    }
  }, [doctors, doctorIndex]);

  const MorningTimeSlots = ["08:00", "09:00", "10:00", "11:00"];
  const AfternoonTimeSlots = ["12:00", "1:00", "2:00", "3:00", "4:00"];

  return (
    <Container>
      <DashboardNavbar role="patient" />
      <Body>
        {viewProfileActive && (
          <ViewProfile
            setActive={setViewProfileActive}
            specialty={doctors[doctorIndex].specialty}
            language
            location
            patient
            name={doctors[doctorIndex].name}
            book={Book}
            rating={doctors[doctorIndex].averageRating}
          />
        )}
        <TopBar />
        <Main>
          <ProgressDiv>
            <ProgressBar steps={[0, 0, 0, 0]} step={progressBarStep} />
          </ProgressDiv>
          <Title>
            {progressBarStep === 1 && "Choose a Doctor"}
            {progressBarStep === 2 && "Pick Time & Date"}
            {progressBarStep === 3 && "Fill Patient Form"}
            {progressBarStep === 4 && "Success!"}
          </Title>
          {progressBarStep === 1 && (
            <>
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
                      index={index}
                      rating={`${data.averageRating}`}
                      name={`${data.name}`}
                      specialty={`${data.specialty}`}
                      setActive={setViewProfileActive}
                      setIndex={setDoctorIndex}
                      book={Book}
                    />
                  );
                })}
                {loading && <Spinner />}
              </DoctorGrid>
            </>
          )}
          {progressBarStep === 2 && (
            <>
              <DateAndTime>
                <CalendarDiv>
                  <Calendar onChange={onChangeDate} value={date} />
                </CalendarDiv>
                <TimeDiv>
                  <h1>Morning</h1>
                  <TimeNumber>
                    {MorningTimeSlots.map((time, i) => {
                      return (
                        <div key={i}>
                          <h2>{time} am</h2>
                        </div>
                      );
                    })}
                  </TimeNumber>
                </TimeDiv>
                <TimeDiv>
                  <h1>Afternoon</h1>
                  <TimeNumber>
                    {AfternoonTimeSlots.map((time, i) => {
                      return (
                        <div key={i}>
                          <h2>{time} pm</h2>
                        </div>
                      );
                    })}
                  </TimeNumber>
                </TimeDiv>
              </DateAndTime>
              <DateAndTimeButton>
                <Button text="Next" onClick={() => setProgressBarStep(3)} />
              </DateAndTimeButton>
              <DateAndTimeFooter>
                Time slots are in (GMT +1) West Africa Time.
              </DateAndTimeFooter>
            </>
          )}
          {progressBarStep === 3 && (
            <>
              <PatientForm>
                <InputComponent title="Name" />
                <InputComponent title="Age" /> <InputComponent title="Sex" />
                <InputComponent title="Occupation" />
                <InputComponent title="Religion" />
                <InputComponent title="Address" />{" "}
                <InputComponent title="Marital Status" />
                <InputComponent title="Tribe" />
                <ComplaintFormHeader>
                  <div />
                  <h1>COMPLAINT & DURATION</h1> <div />
                </ComplaintFormHeader>
                <ComplaintInput
                  placeHolder={
                    "Write a short message on what’s wrong with you and how long it has lasted"
                  }
                />
                <Button text="Next" onClick={() => setProgressBarStep(4)} />
              </PatientForm>
            </>
          )}
          {progressBarStep === 4 && (
            <>
              <SuccessDiv>
                <ImageContainer>
                  <img src={approveBadge} alt="success" />
                </ImageContainer>
                <h1>
                  You have requested to scheduled an appointment with{" "}
                  {Capitalize(doctorName)}. You’ll get a confirmation message
                  when the doctor accepts then you can proceed to payment to
                  validate.
                </h1>
              </SuccessDiv>
            </>
          )}
        </Main>
      </Body>
    </Container>
  );
};
