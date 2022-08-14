import React, { useState } from "react";
import {
  Button,
  SwitchTab,
  TextForm,
  DocumentUpload,
  Dropdown
} from "../../../Components";

import {
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

export const DoctorProfile = () => {
  let axios = require("axios");
  const location = useLocation();
  const { userName, phoneNumber, email, password, confirmPassword } =
    location.state;
  const [tab, setTab] = useState("General");
  const setTabFunction = (tab) => {
    setTab(tab);
  };

  const General = () => {
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

    return (
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
            onSelect={() => setSpecialty()}
          />
          <TextForm
            title={"Med School Grad Year"}
            width={"300px"}
            placeholder={"mm/dd/yyyy"}
            inputValue={formatDate(gradYear)}
            onChange={(e) => setGradYear(e.target.value)}
          />
        </Forms>
        <Button text={"Next"} fontSize={"14px"} />
      </TabContent>
    );
  };

  const Documents = () => {
    const [file, setFile] = useState();
    const [file2, setFile2] = useState();
    function handleChange(event) {
      setFile(event.target.files[0]);
    }

    function handleChange2(event) {
      setFile2(event.target.files[0]);
    }
    console.log(file);

    return (
      <TabContent>
        <Headers>Upload Documents</Headers>
        <SubHeader>
          All files should have descriptive file names. Only jpeg and pdf are
          accepted.
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
        <Button text={"Next"} fontSize={"14px"} />
      </TabContent>
    );
  };

  const BankAccount = () => {
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
    return (
      <TabContent>
        <Headers>Bank Details</Headers>
        <SubHeader>
          Fill your bank details in order to receive payments for completed
          sessions from patients.
        </SubHeader>
        <BankAccountForms>
          <Dropdown
            title={"Select Bank"}
            label="Choose a Bank"
            items={BankAccounts}
            onSelect={setUserBank}
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
    );
  };

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
      <Margin></Margin>
      <Body>
        <LogoDiv />
        <SwitchTab
          labels={["General", "Documents", "Bank Account"]}
          OnSelect={setTabFunction}
        />
        {tab === "General" ? <General /> : null}
        {tab === "Documents" ? <Documents /> : null}
        {tab === "Bank Account" ? <BankAccount /> : null}
        {/* {tab === "Success" ? <Success /> : null} */}
      </Body>
    </Container>
  );
};

const BankAccountForms = styled.div`
  margin-top: 20px;
  width: 40%;
  margin-bottom: 20px;
`;

const UploadPictureDiv = styled.div`
  margin: 50px 0px;
  width: 40%;
`;
