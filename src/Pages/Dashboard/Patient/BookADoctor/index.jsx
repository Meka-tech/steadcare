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
import { useFormik } from "formik";
import useFetch from "../../../../hooks/useFetch";
import { useMemo } from "react";

export const BookADoctorPage = () => {
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [doctors, setDoctors] = useState();
  const [specialty, setSpecialty] = useState("");
  const [viewProfileActive, setViewProfileActive] = useState(false);
  const [doctorIndex, setDoctorIndex] = useState();
  const [doctorName, setDoctorName] = useState("");
  const [progressBarStep, setProgressBarStep] = useState(1);
  const [date, onChangeDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("8:00");
  const [doctorId, setDoctorId] = useState(0);
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
  const SetAllDoctor = (response) => {
    setDoctors(response.data.data);
    console.log(response);
  };

  const { loading } = useFetch(token, "/view-all-doctors", SetAllDoctor);

  console.log(token);

  const SetFilteredDoctor = (response) => {
    setDoctors(response.data.data.fetchedDoctors);
  };

  const FilterDoctors = () => {
    useFetch(
      token,
      `/filter-doctors?pageNo=1&noOfRequests=1&specialty=${specialty}`,
      SetFilteredDoctor
    );
  };

  const MorningTimeSlots = ["08:00", "09:00", "10:00", "11:00"];
  const AfternoonTimeSlots = ["12:00", "1:00", "2:00", "3:00", "4:00"];

  const BookAnAppointment = async () => {
    const data = {
      name: `${values.name}`,
      time: `${date.toDateString() + " " + selectedTime}`,
      gender: `${values.sex}`,
      occupation: `${values.occupation}`,
      religion: `${values.religion}`,
      address: `${values.address}`,
      maritalStatus: `${values.maritalStatus}`,
      tribe: `${values.tribe}`,
      complaint: `${values.complaint}`
    };
    const config = {
      method: "post",
      url: `${BaseUrl}/book-doctor-appointment/${doctorId}`,
      headers: { Authorization: "Bearer " + token },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setProgressBarStep(4);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      age: "",
      sex: "",
      occupation: "",
      religion: "",
      address: "",
      maritalStatus: "",
      tribe: "",
      complaint: ""
    },
    onSubmit: BookAnAppointment
  });

  return (
    <Container>
      <DashboardNavbar role="patient" />
      <Body>
        {viewProfileActive && (
          <ViewProfile
            setActive={setViewProfileActive}
            specialty={doctors[doctorIndex].specialty}
            language={doctors[doctorIndex].language}
            location
            patient
            name={doctors[doctorIndex].name}
            book={Book}
            rating={doctors[doctorIndex].averageRating}
          />
        )}
        <TopBar role={"patient"} />
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
                      language={`${data.languages}`}
                      name={`${data.name}`}
                      specialty={`${data.specialty}`}
                      setActive={setViewProfileActive}
                      setIndex={setDoctorIndex}
                      setDoctorId={setDoctorId}
                      book={Book}
                      doctorId={data._id}
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
                        <div
                          key={i}
                          onClick={() => setSelectedTime(time)}
                          style={{
                            backgroundColor:
                              time === selectedTime
                                ? "rgba(0, 0, 255, 0.5)"
                                : ""
                          }}
                        >
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
                        <div
                          key={i}
                          onClick={() => setSelectedTime(time)}
                          style={{
                            backgroundColor:
                              time === selectedTime
                                ? "rgba(0, 0, 255, 0.5)"
                                : ""
                          }}
                        >
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
                <InputComponent
                  title="Name"
                  inputValue={values.name}
                  onChange={handleChange("name")}
                />
                <InputComponent
                  title="Age"
                  inputValue={values.age}
                  onChange={handleChange("age")}
                />
                <InputComponent
                  title="Sex"
                  inputValue={values.sex}
                  onChange={handleChange("sex")}
                />
                <InputComponent
                  title="Occupation"
                  inputValue={values.occupation}
                  onChange={handleChange("occupation")}
                />
                <InputComponent
                  title="Religion"
                  inputValue={values.religion}
                  onChange={handleChange("religion")}
                />
                <InputComponent
                  title="Address"
                  inputValue={values.address}
                  onChange={handleChange("address")}
                />
                <InputComponent
                  title="Marital Status"
                  inputValue={values.maritalStatus}
                  onChange={handleChange("maritalStatus")}
                />
                <InputComponent
                  title="Tribe"
                  inputValue={values.tribe}
                  onChange={handleChange("tribe")}
                />
                <ComplaintFormHeader>
                  <div />
                  <h1>COMPLAINT & DURATION</h1> <div />
                </ComplaintFormHeader>
                <ComplaintInput
                  placeHolder={
                    "Write a short message on what’s wrong with you and how long it has lasted"
                  }
                  inputValue={values.complaint}
                  onChange={handleChange("complaint")}
                />
                <Button text="Next" onClick={handleSubmit} />
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
