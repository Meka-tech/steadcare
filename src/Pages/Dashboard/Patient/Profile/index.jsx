import React, { useState } from "react";

import {
  Button,
  CalendarForm,
  Credentials,
  DashboardNavbar,
  Dropdown,
  TextForm
} from "../../../../Components";
import { Body, Container } from "../../style";
import { useNavigate } from "react-router-dom";
import { Spinner, TopBar } from "../component";
import { ButtonDiv, DropDowns, Forms, Main } from "./style";
import { useSelector } from "react-redux";
import { ReactComponent as Edit } from "../../../../Images/FormIcons/formEditIcon.svg";
import { ReactComponent as Calendar } from "../../../../Images/FormIcons/formCalendarIcon.svg";
import { Capitalize } from "../../../../Utilities/globalFunc";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import { useFormik } from "formik";
import useFetch from "../../../../hooks/useFetch";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

export const PatientProfile = () => {
  const User = useSelector((state) => state.reducer.patientDetails);

  const token = useSelector((state) => state.reducer.patientDetails.token);

  const [userData, setUserData] = useState({
    name: User.name,
    country: "",
    gender: "",
    bloodGroup: "",
    dob: "",
    email: "",
    phone: ""
  });

  const GetUserData = (res) => {
    setUserData(res.data.data);
  };

  const { loading: userLoading } = useFetch(token, "/my-profile", GetUserData);

  const FirstName = Capitalize(userData.name.split(" ")[0]);
  const LastName = Capitalize(userData.name.split(" ")[1]);

  const CountryList = [];
  const [country, setCountry] = useState("");

  const GenderList = ["Male", "Female"];
  const [gender, setGender] = useState("");

  const BloodGroupsList = ["A", "B", "AB", "0"];
  const [bloodGroup, setbloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [ImageFile, setImageFile] = useState("");

  useEffect(() => {
    setGender(userData.gender);
    setbloodGroup(userData.bloodGroup);
    setCountry(userData.country);
    setDob(userData.dob);
    setPhone(userData.phone);
    setEmail(userData.email);
    setAvatar(userData.avatar);
  }, [userData]);

  const [loading, setLoading] = useState(false);

  const UpdateProfile = async () => {
    setLoading(true);
    const PayloadData = {};
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
    if (userData.gender !== gender) {
      PayloadData.gender = gender;
    }
    if (userData.bloodGroup !== bloodGroup) {
      PayloadData.bloodGroup = bloodGroup;
    }
    if (userData.avatar !== avatar) {
      PayloadData.avatar = avatar;
    }
    if (userData.dob !== dob) {
      PayloadData.dob = dob;
    }
    const config = {
      method: "patch",
      url: `${BaseUrl}/update-profile`,
      headers: { Authorization: "Bearer " + token },
      data: PayloadData
    };

    axios(config)
      .then(function (response) {
        toast.success(response.data.message);
        setLoading(false);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {},
    onSubmit: UpdateProfile
  });

  //upload Image
  const handleUpload = (event) => {
    setImageFile(event.target.files[0]);
  };

  const setImage = (res) => {
    setAvatar({
      url: res[0].path,
      key: res[0].publicId
    });
  };

  useEffect(() => {
    if (ImageFile) {
      const MediaUpload = async () => {
        const data = new FormData();
        data.append(`file`, ImageFile);
        axios({
          method: "post",
          url: `${BaseUrl}/media-upload`,
          data,
          headers: { "Content-Type": "multipart/form-data" }
        })
          .then(function (res) {
            const response = res.data.data;
            toast.success("Profile Photo updated ,  save changes to reflec");
            setImage(response);
          })
          .catch(function () {});
      };
      MediaUpload();
    }
  }, [ImageFile]);

  return (
    <Container>
      <DashboardNavbar active={"Profile"} role={"patient"} />
      <Body>
        <TopBar role={"patient"} />
        <Main>
          {userLoading ? (
            <Spinner />
          ) : (
            <>
              <Credentials
                firstName={FirstName}
                lastName={LastName}
                email={userData.email}
                onChange={handleUpload}
                url={avatar?.url}
              />
              <Forms>
                <TextForm
                  width={"80%"}
                  title="First Name"
                  inactive={true}
                  placeholder={`${FirstName}`}
                  readOnly
                />
                <TextForm
                  inactive={true}
                  width={"80%"}
                  title="Last Name"
                  placeholder={`${LastName}`}
                  readOnly
                />
                <CalendarForm
                  width={"80%"}
                  title="Date of Birth"
                  placeholder={`mm/dd/yyyy`}
                  inputDate={dob}
                  setDate={setDob}
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
                  icon={<Edit width={"2rem"} height={"2rem"} />}
                  placeholder={`${userData.email}`}
                  inputValue={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <Button
                  width={"100%"}
                  text="Save Changes"
                  onClick={handleSubmit}
                  isLoading={loading}
                />
                <ToastContainer />
              </ButtonDiv>
            </>
          )}
        </Main>
      </Body>
    </Container>
  );
};
