import React, { useState } from "react";

import {
  Button,
  Credentials,
  DashboardNavbar,
  DoctorDashboardNavbar,
  Dropdown,
  TextForm
} from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { BioFormHeader, ButtonDiv, DropDowns, Forms, Main } from "./style";
import { useSelector } from "react-redux";
import { ReactComponent as Edit } from "../../../../Images/FormIcons/formEditIcon.svg";
import { ReactComponent as Calendar } from "../../../../Images/FormIcons/formCalendarIcon.svg";
import { Capitalize } from "../../../../Utilities/globalFunc";
import { BioInput } from "./component";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import { useFormik } from "formik";

export const DoctorProfile = () => {
  const user = useSelector((state) => state.reducer.doctorDetails);
  const token = useSelector((state) => state.reducer.doctorDetails.token);
  const FirstName = Capitalize(user.name.split(" ")[0]);
  const LastName = Capitalize(user.name.split(" ")[1]);

  const navigate = useNavigate();

  const CountryList = [];
  const [country, setCountry] = useState("NGA");

  const Languages = ["English", "Igbo", "Hausa", "Yoruba"];
  const [firstLanguage, setfirstLanguage] = useState("");
  const [otherLanguage, setOtherLanguage] = useState("");

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
  const LocationToggle = ["On", "Off"];
  const [locationOn, toggleLocation] = useState("On");
  const UpdateProfile = async () => {
    const data = {
      dob: `${values.dob}`,
      country,
      phone: `${values.phone}`,
      email: `${values.email}`,
      specialty,
      Languages,
      Location,
      locationOn
    };

    const config = {
      method: "patch",
      url: `${BaseUrl}/update-profile`,
      headers: { Authorization: "Bearer " + token },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      dob: "",
      phone: "",
      email: "",
      bio: ""
    },
    onSubmit: UpdateProfile
  });

  return (
    <Container>
      <DoctorDashboardNavbar active={"Profile"} />
      <Body>
        <TopBar role={"doctor"} />
        <Main>
          <Credentials
            firstName={FirstName}
            lastName={LastName}
            email={user.specialty}
          />
          <Forms>
            <TextForm
              width={"80%"}
              title="First Name"
              inactive={true}
              placeholder={`${FirstName}`}
            />
            <TextForm
              inactive={true}
              width={"80%"}
              title="Last Name"
              placeholder={`${LastName}`}
            />
            <TextForm
              width={"80%"}
              inactive={true}
              title="Date of Birth"
              icon={<Calendar />}
              placeholder={"dd/mm/yy"}
              inputValue={values.dob}
              onChange={handleChange("dob")}
            />
            <Dropdown
              width={"80%"}
              title="Country"
              label={"Nigeria"}
              selectedItem={country}
              items={CountryList}
              onSelect={setCountry}
            />
            <TextForm
              inactive={true}
              width={"80%"}
              title="Phone Number"
              placeholder={`${user.phoneNumber}`}
              inputValue={values.phone}
              onChange={handleChange("phone")}
            />
            <TextForm
              width={"80%"}
              inactive={true}
              title="Email Address"
              icon={<Edit />}
              placeholder={`${user.email}`}
              inputValue={values.email}
              onChange={handleChange("email")}
            />
            <DropDowns>
              <Dropdown
                title={"Languages"}
                width={"80%"}
                items={Languages}
                selectedItem={firstLanguage}
                onSelect={setfirstLanguage}
              />
              <Dropdown
                title={"Other"}
                width={"80%"}
                items={Languages}
                selectedItem={otherLanguage}
                onSelect={setOtherLanguage}
              />
            </DropDowns>
            <Dropdown
              title={"Specialty"}
              width={"80%"}
              items={Specialties}
              selectedItem={specialty}
              onSelect={setSpecialty}
              label={user.specialty}
            />
            <Dropdown
              width={"80%"}
              title="Location"
              label={"Lagos"}
              selectedItem={country}
              items={CountryList}
              onSelect={setCountry}
            />
            <Dropdown
              width={"80%"}
              title="Location"
              label={"On"}
              selectedItem={locationOn}
              items={LocationToggle}
              onSelect={toggleLocation}
            />
          </Forms>
          <BioInput
            title={"Bio"}
            placeholder={"Say something about yourself"}
            inputValue={values.bio}
            onChange={handleChange("bio")}
          />

          <ButtonDiv>
            <Button width={"100%"} text="Save Changes" onClick={handleSubmit} />
          </ButtonDiv>
        </Main>
      </Body>
    </Container>
  );
};
