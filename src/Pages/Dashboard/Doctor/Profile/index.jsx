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

export const DoctorProfile = () => {
  const user = useSelector((state) => state.reducer.doctorDetails);
  const FirstName = Capitalize(user.name.split(" ")[0]);
  const LastName = Capitalize(user.name.split(" ")[1]);

  const navigate = useNavigate();

  const CountryList = [];
  const [country, setCountry] = useState("");

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
  return (
    <Container>
      <DoctorDashboardNavbar active={"Profile"} />
      <Body>
        <TopBar />
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
            />
            <TextForm
              width={"80%"}
              inactive={true}
              title="Email Address"
              icon={<Edit />}
              placeholder={`${user.email}`}
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
          />

          <ButtonDiv>
            <Button width={"100%"} text="Save Changes" />
          </ButtonDiv>
        </Main>
      </Body>
    </Container>
  );
};
