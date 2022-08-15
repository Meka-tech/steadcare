import React, { useState } from "react";
import {
  Button,
  SwitchTab,
  TextForm,
  DocumentUpload,
  Dropdown
} from "../../../Components";

import {
  AuthMargin,
  Body,
  Container,
  Forms,
  Headers,
  LogoDiv,
  Margin,
  SubHeader,
  TabContent
} from "../style";
import styled from "styled-components";
import { formatDate } from "../../../Utilities/globalFunc";
import { useLocation } from "react-router";
import axios from "axios";
import { BaseUrl } from "../../../Utilities";
import approveBadge from "../../../Images/approveBadge.png";

export const DoctorProfile = () => {
  let axios = require("axios");
  const location = useLocation();
  const { userName, phoneNumber, email, password, confirmPassword } =
    location.state;
  const [tab, setTab] = useState("General");
  const setTabFunction = (tab) => {
    setTab(tab);
  };
  //General States

  const [doctorsReg, setDoctorsReg] = useState("");
  const [licenseDate, setlicenseDate] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [gradYear, setGradYear] = useState("");
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

  //Documents

  const [file, setFile] = useState();
  const [file2, setFile2] = useState();
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleChange2(event) {
    setFile2(event.target.files[0]);
  }

  //Bank Account
  const [userBank, setUserBank] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const BankAccounts = [
    "Access Bank",
    "Access Bank",
    "Access Bank",
    "Access Bank",
    "Access Bank",
    "Access Bank",
    "Access Bank",
    "Access Bank"
  ];

  const handleSubmit = () => {
    const data = {
      name: `${userName}`,
      email: `${email}`,
      password: `${password}`,
      confirmPassword: `${confirmPassword}`,
      role: `doctor`,
      specialty: ``,
      practicisingLincense: ``,
      registrationCertificate: ``,
      bankName: ``,
      accountName: ``,
      accountNumber: ``
    };

    const config = {
      method: "post",
      url: `${BaseUrl}/create-user-account`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function () {
        setTab("Success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <AuthMargin />
      <Body>
        <LogoDiv />
        {tab === "Success" ? null : (
          <SwitchTab
            labels={["General", "Documents", "Bank Account"]}
            OnSelect={setTabFunction}
            selected={tab}
          />
        )}
        {tab === "General" ? (
          <TabContent>
            <Headers>Profile</Headers>
            <SubHeader>
              All colomuns should be filled with the correct details.
            </SubHeader>
            <Forms>
              <TextForm
                title={"Doctor’s Reg No"}
                width={"300px"}
                inputValue={doctorsReg}
                onChange={(e) => setDoctorsReg(e.target.value)}
              />
              <TextForm
                title={"License Expiry Date"}
                width={"300px"}
                inputValue={licenseDate}
                onChange={(e) => setlicenseDate(e.target.value)}
              />
              <Dropdown
                title={"Specialty"}
                width={"310px"}
                items={Specialties}
                onSelect={setSpecialty}
                selectedItem={specialty}
              />
              <TextForm
                title={"Med School Grad Year"}
                width={"300px"}
                placeholder={"mm/dd/yyyy"}
                inputValue={formatDate(gradYear)}
                onChange={(e) => setGradYear(e.target.value)}
              />
            </Forms>
            <Button
              text={"Next"}
              fontSize={"14px"}
              onClick={() => setTabFunction("Documents")}
            />
          </TabContent>
        ) : null}
        {tab === "Documents" ? (
          <TabContent>
            <Headers>Upload Documents</Headers>
            <SubHeader>
              All files should have descriptive file names. Only jpeg and pdf
              are accepted.
            </SubHeader>
            <UploadPictureDiv>
              <DocumentUpload
                title={"Upload Current Practising License"}
                fileName={file?.name}
                onChange={handleChange}
              />
              <DocumentUpload
                title={"Upload Full Registration Certificate"}
                fileName={file2?.name}
                onChange={handleChange2}
              />
            </UploadPictureDiv>
            <Button
              text={"Next"}
              fontSize={"14px"}
              onClick={() => setTab("Bank Account")}
            />
          </TabContent>
        ) : null}
        {tab === "Bank Account" ? (
          <TabContent>
            <Headers>Bank Details</Headers>
            <SubHeader>
              Fill your bank details in order to receive payments for completed
              sessions from patients.
            </SubHeader>
            <WarningMessage>
              Make sure your bank account name matches the name on your profile.
            </WarningMessage>
            <BankAccountForms>
              <Dropdown
                title={"Select Bank"}
                label="Choose a Bank"
                items={BankAccounts}
                onSelect={setUserBank}
                selectedItem={userBank}
              />
              <TextForm
                title={"Account Name"}
                placeholder={"Account Name"}
                inputValue={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
              <TextForm
                title={"Account Number"}
                inputValue={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </BankAccountForms>
            <Button text={"Verify"} fontSize={"14px"} />
          </TabContent>
        ) : null}
        {tab === "Success" ? (
          <TabContent>
            <ImageContainer>
              <img src={approveBadge} alt="success" />
            </ImageContainer>
            <SuccessText>
              You’ve submitted your details successfully. We will get back to
              you within 24hours.
            </SuccessText>
          </TabContent>
        ) : null}
      </Body>
    </Container>
  );
};

//styles
const BankAccountForms = styled.div`
  margin-top: 20px;
  width: 40%;
  margin-bottom: 20px;
`;

const UploadPictureDiv = styled.div`
  margin: 50px 0px;
  width: 40%;
`;
const WarningMessage = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(255, 30, 30, 1);
  margin-top: 5px;
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 40px;
`;
const SuccessText = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
`;
