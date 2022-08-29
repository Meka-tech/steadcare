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

export const PatientProfile = () => {
  const user = useSelector((state) => state.reducer.userDetails);
  const FirstName = Capitalize(user.name.split(" ")[0]);
  const LastName = Capitalize(user.name.split(" ")[1]);

  const navigate = useNavigate();

  const CountryList = [];
  const [country, setCountry] = useState("");

  const GenderList = ["Male", "Female"];
  const [gender, setGender] = useState("");

  const BloodGroupsList = ["A", "B", "AB", "0"];
  const [bloodGroup, setbloodGroup] = useState("");
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
            <Button width={"100%"} text="Save Changes" />
          </ButtonDiv>
        </Main>
      </Body>
    </Container>
  );
};
