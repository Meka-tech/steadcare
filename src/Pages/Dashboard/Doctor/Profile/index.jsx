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
import { Spinner, TopBar } from "../component";
import { BioFormHeader, ButtonDiv, DropDowns, Forms, Main } from "./style";
import { useSelector } from "react-redux";
import { ReactComponent as Edit } from "../../../../Images/FormIcons/formEditIcon.svg";
import { ReactComponent as Calendar } from "../../../../Images/FormIcons/formCalendarIcon.svg";
import { Capitalize } from "../../../../Utilities/globalFunc";
import { BioInput } from "./component";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import { useFormik } from "formik";
import useFetch from "../../../../hooks/useFetch";
import { useEffect } from "react";

export const DoctorProfile = () => {
  const user = useSelector((state) => state.reducer.doctorDetails);
  const token = useSelector((state) => state.reducer.doctorDetails.token);

  const [userData, setUserData] = useState({
    name: user.name,
    country: "",
    gender: "",
    bloodGroup: "",
    dob: "",
    email: "",
    phone: "",
    languages: []
  });

  const GetUserData = (res) => {
    setUserData(res.data.data);
  };

  const { loading: userLoading } = useFetch(token, "/my-profile", GetUserData);

  console.log(userData);

  const FirstName = Capitalize(userData.name.split(" ")[0]);
  const LastName = Capitalize(userData.name.split(" ")[1]);

  const [firstName, setFirstName] = useState(FirstName);
  const [lastName, setLastName] = useState(LastName);

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
  const [locationOn, toggleLocation] = useState();

  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setfirstLanguage(userData.languages[0]);
    setOtherLanguage(userData.languages[1]);
    toggleLocation(userData.locationIsOn);
    setBio(userData.bio);
    setCountry(userData.country);
    setDob(userData.dob);
    setPhone(userData.phone);
    setEmail(userData.email);
    setSpecialty(userData.specialty);
  }, [userData]);

  const [loading, setLoading] = useState(false);

  const UpdateProfile = async () => {
    setLoading(true);
    const PayloadData = {};
    if (FirstName + " " + LastName !== firstName + " " + lastName) {
      PayloadData.name = firstName + " " + lastName;
    }
    if (dob !== userData.dob) {
      PayloadData.dob = dob;
    }
    if (country !== userData.country) {
      PayloadData.country = country;
    }
    if (userData.phone !== phone) {
      PayloadData.phone = phone;
    }
    if (userData.email !== email) {
      PayloadData.email = email;
    }
    if (userData.languages[0] !== firstLanguage) {
      PayloadData.languages[0] = firstLanguage;
    }
    if (userData.languages[1] !== otherLanguage) {
      PayloadData.languages[1] = otherLanguage;
    }
    if (userData.specialty !== specialty) {
      PayloadData.specialty = specialty;
    }
    if (userData.locationIsOn !== locationOn) {
      if (locationOn === "On") {
        PayloadData.locationIsOn = true;
      } else {
        PayloadData.locationIsOn = false;
      }
    }
    if (userData.bio !== bio) {
      PayloadData.bio = bio;
    }

    console.log(PayloadData, "Payload");

    const config = {
      method: "patch",
      url: `${BaseUrl}/update-profile`,
      headers: { Authorization: "Bearer " + token },
      data: PayloadData
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {},
    onSubmit: UpdateProfile
  });

  return (
    <Container>
      <DoctorDashboardNavbar active={"Profile"} />
      <Body>
        <TopBar role={"doctor"} />
        <Main>
          {userLoading ? (
            <Spinner />
          ) : (
            <>
              <Credentials
                firstName={FirstName}
                lastName={LastName}
                email={userData.specialty}
              />
              <Forms>
                <TextForm
                  width={"80%"}
                  title="First Name"
                  inactive={true}
                  placeholder={`${FirstName}`}
                  inputValue={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextForm
                  inactive={true}
                  width={"80%"}
                  title="Last Name"
                  placeholder={`${LastName}`}
                  inputValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextForm
                  width={"80%"}
                  inactive={true}
                  title="Date of Birth"
                  icon={<Calendar />}
                  placeholder={"dd/mm/yy"}
                  inputValue={dob}
                  onChange={(e) => setDob(e.target.value)}
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
                  placeholder={`${userData.phone}`}
                  inputValue={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextForm
                  width={"80%"}
                  inactive={true}
                  title="Email Address"
                  icon={<Edit />}
                  placeholder={`${userData.email}`}
                  inputValue={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  label={userData.specialty}
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
                  selectedItem={locationOn ? "On" : "Off"}
                  items={LocationToggle}
                  onSelect={toggleLocation}
                />
              </Forms>
              <BioInput
                title={"Bio"}
                placeholder={"Say something about yourself"}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />

              <ButtonDiv>
                <Button
                  width={"100%"}
                  text="Save Changes"
                  onClick={handleSubmit}
                  isLoading={loading}
                />
              </ButtonDiv>
            </>
          )}
        </Main>
      </Body>
    </Container>
  );
};
