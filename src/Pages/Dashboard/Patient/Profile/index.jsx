import React, { useState } from "react";

import {
  Button,
  Credentials,
  DashboardNavbar,
  Dropdown,
  TextForm
} from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../component";
import { ButtonDiv, DropDowns, Forms, Main } from "./style";
import { useSelector } from "react-redux";
import { ReactComponent as Edit } from "../../../../Images/FormIcons/formEditIcon.svg";
import { ReactComponent as Calendar } from "../../../../Images/FormIcons/formCalendarIcon.svg";
import { Capitalize } from "../../../../Utilities/globalFunc";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import { useFormik } from "formik";

export const PatientProfile = () => {
  const user = useSelector((state) => state.reducer.patientDetails);
  const FirstName = Capitalize(user.name.split(" ")[0]);
  const LastName = Capitalize(user.name.split(" ")[1]);
  const token = useSelector((state) => state.reducer.patientDetails.token);

  const navigate = useNavigate();

  const CountryList = [];
  const [country, setCountry] = useState("NGA");

  const GenderList = ["Male", "Female"];
  const [gender, setGender] = useState("");

  const BloodGroupsList = ["A", "B", "AB", "0"];
  const [bloodGroup, setbloodGroup] = useState("");

  const UpdateProfile = async () => {
    const data = {
      dob: `${values.dob}`,
      gender,
      country,
      phone: `${values.phone}`,
      bloodGroup,
      email: `${values.email}`
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
      email: ""
    },
    onSubmit: UpdateProfile
  });

  return (
    <Container>
      <DashboardNavbar active={"Profile"} role={"patient"} />
      <Body>
        <TopBar />
        <Main>
          <Credentials
            firstName={FirstName}
            lastName={LastName}
            email={user.email}
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
              icon={<Calendar width={"2rem"} height={"2rem"} />}
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
              icon={<Edit width={"2rem"} height={"2rem"} />}
              placeholder={`${user.email}`}
              inputValue={values.email}
              onChange={handleChange("email")}
            />
          </Forms>
          <DropDowns>
            <Dropdown
              title={"Gender"}
              width={"80%"}
              items={GenderList}
              selectedItem={gender}
              onSelect={setGender}
            />
            <Dropdown
              title={"Blood Group"}
              width={"80%"}
              items={BloodGroupsList}
              selectedItem={bloodGroup}
              onSelect={setbloodGroup}
            />
          </DropDowns>
          <ButtonDiv>
            <Button width={"100%"} text="Save Changes" onClick={handleSubmit} />
          </ButtonDiv>
        </Main>
      </Body>
    </Container>
  );
};
