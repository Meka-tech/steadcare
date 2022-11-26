import React, { useEffect, useState } from "react";
import {
  Button,
  SwitchTab,
  TextForm,
  DocumentUpload,
  Dropdown,
  CalendarForm
} from "../../../../Components";

import {
  AuthMargin,
  Body,
  Container,
  Forms,
  Headers,
  LogoDiv,
  MarginLeft,
  SubHeader,
  TabContent
} from "../../style";
import styled from "styled-components";
import { formatDate } from "../../../../Utilities/globalFunc";
import { useLocation } from "react-router";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import approveBadge from "../../../../Images/approveBadge.png";
import { useFormik } from "formik";
import { mobile } from "../../../../Utilities/responsive";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DoctorSignInProfile = () => {
  const location = useLocation();
  const { name, phoneNumber, email, password, confirmPassword } =
    location.state;
  const [tab, setTab] = useState("General");
  const [expDate, setExpDate] = useState();
  const setExpDateFunc = (date) => {
    setExpDate(date);
  };
  const setTabFunction = (tab) => {
    setTab(tab);
  };
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

  const [userBank, setUserBank] = useState("");
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

  const [formOneCompleted, setFormOneCompleted] = useState(false);

  const [formTwoCompleted, setFormTwoCompleted] = useState(false);

  const PageOneButton = () => {
    if (values.regNo && values.gradYear && specialty && expDate) {
      setFormOneCompleted(true);
      setTabFunction("Documents");
    } else {
      toast.info("Please fill all fields");
    }
  };

  ///////////////////////////////
  //upload Media///////////////////////
  ////////////////////////////////////
  const [practicisingLincense, setPracticisingLincense] = useState();
  const [registrationCertificate, setRegistrationCertificate] = useState();

  //upload files to endpoint and recieve path and key for registration endpoint
  const [pLFile, setPLFile] = useState();
  const [rCFile, setRCFile] = useState();
  const setDocuments = (res) => {
    setPLFile({
      path: res[0].path,
      key: res[0].publicId
    });
    setRCFile({
      path: res[1].path,
      key: res[1].publicId
    });
  };

  function handleUpload(event) {
    setPracticisingLincense(event.target.files[0]);
    setFormTwoCompleted(false);
  }

  function handleUpload2(event) {
    setRegistrationCertificate(event.target.files[0]);
    setFormTwoCompleted(false);
  }

  const [uploadingMedia, setUploadingMedia] = useState(false);

  const MediaUpload = async () => {
    if (practicisingLincense && registrationCertificate) {
      setUploadingMedia(true);
      const data = new FormData();
      data.append(`file`, practicisingLincense);
      data.append(`file`, registrationCertificate);
      axios({
        method: "post",
        url: `${BaseUrl}/media-upload`,
        data,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(function (res) {
          const response = res.data.data;
          setDocuments(response);
          setUploadingMedia(false);
          setFormTwoCompleted(true);
          setTab("Bank Account");
        })
        .catch(function () {
          setUploadingMedia(false);
        });
    } else {
      toast.info("Please Upload required files");
    }
  };
  /////////////////////////////////////
  /////////////////////////////////////

  ///verify////////////////////////
  /////////////////////////////////
  const [verifyIsLoading, setVerifyIsLoading] = useState(false);
  const onhandleSubmit = async () => {
    if (userBank && values.accountName && values.accountNumber) {
      setVerifyIsLoading(true);
      const data = {
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
        confirmPassword: `${confirmPassword}`,
        role: `doctor`,
        specialty: `${specialty}`,
        practicisingLincense: pLFile,
        registrationCertificate: rCFile,
        phone: `${phoneNumber}`,
        bankName: `${userBank}`,
        accountName: `${values.accountName}`,
        accountNumber: `${values.accountNumber}}`,
        regNum: `${values.regNum}`,
        licenseExpiryDate: `${expDate}`,
        gradYear: `${values.gradYear}`
      };

      const config = {
        method: "post",
        url: `${BaseUrl}/create-user-account`,
        headers: {},
        data: data
      };

      axios(config)
        .then(function () {
          setVerifyIsLoading(false);
          setTab("Success");
        })
        .catch(function () {
          setVerifyIsLoading(false);
        });
    } else {
      toast.info("Fill all fields");
    }
  };
  /////////////////////

  //formik
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      regNo: "",
      gradYear: "",
      accountName: "",
      accountNumber: ""
    },
    onSubmit: onhandleSubmit
  });

  const IsMobile = useIsMobile();

  return (
    <Container>
      <AuthMargin />
      <Body>
        <ToastContainer />
        <LogoDiv />
        <MarginLeft>
          {tab === "Success" ? null : (
            <div style={{ position: "relative" }}>
              <Block form1={formOneCompleted} form2={formTwoCompleted} />
              <SwitchTab
                labels={["General", "Documents", "Bank Account"]}
                OnSelect={setTabFunction}
                selected={tab}
              />
            </div>
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
                  inputValue={values.regNo}
                  onChange={handleChange("regNo")}
                />
                <CalendarForm
                  title={"License Expiry Date"}
                  width={"300px"}
                  inputValue={values.expDate}
                  placeholder={"dd/mm/yyyy"}
                  inputDate={expDate}
                  setDate={setExpDateFunc}
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
                  inputValue={values.gradYear}
                  onChange={handleChange("gradYear")}
                />
              </Forms>
              <Button
                text={"Next"}
                fontSize={"14px"}
                onClick={() => PageOneButton()}
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
                  fileName={practicisingLincense?.name}
                  onChange={handleUpload}
                />
                <DocumentUpload
                  title={"Upload Full Registration Certificate"}
                  fileName={registrationCertificate?.name}
                  onChange={handleUpload2}
                />
              </UploadPictureDiv>
              <Button
                text={"Next"}
                fontSize={"14px"}
                isLoading={uploadingMedia}
                onClick={() => {
                  MediaUpload();
                }}
              />
            </TabContent>
          ) : null}
          {tab === "Bank Account" ? (
            <TabContent>
              <Headers>Bank Details</Headers>
              <SubHeader>
                Fill your bank details in order to receive payments for
                completed sessions from patients.
              </SubHeader>
              <WarningMessage>
                Make sure your bank account name matches the name on your
                profile.
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
                  inputValue={values.accountName}
                  onChange={handleChange("accountName")}
                />
                <TextForm
                  title={"Account Number"}
                  inputValue={values.accountNumber}
                  onChange={handleChange("accountNumber")}
                />
              </BankAccountForms>
              <Button
                text={"Verify"}
                fontSize={"14px"}
                onClick={() => handleSubmit()}
                isLoading={verifyIsLoading}
              />
            </TabContent>
          ) : null}
          {tab === "Success" ? (
            <TabContent>
              <ImageContainer>
                <img
                  src={approveBadge}
                  alt="success"
                  width={IsMobile ? "100rem" : ""}
                />
              </ImageContainer>
              <SuccessText>
                You’ve submitted your details successfully. We will get back to
                you within 24hours.
              </SuccessText>
            </TabContent>
          ) : null}
        </MarginLeft>
      </Body>
    </Container>
  );
};

//styles
const BankAccountForms = styled.div`
  margin-top: 2rem;
  width: 40%;
  margin-bottom: 2rem;
  ${mobile({ width: "80%" })}
`;
const Block = styled.div`
  z-index: 10;
  position: absolute;
  height: 100%;
  width: ${(props) =>
    props.form2 && props.form1 ? "0%" : props.form1 ? "50%" : "75%"};
  right: 0;
`;
const UploadPictureDiv = styled.div`
  margin: 5rem 0;
  width: 40%;
  ${mobile({ width: "80%" })}
`;
const WarningMessage = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: rgba(255, 30, 30, 1);
  margin-top: 0.5rem;
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  margin-bottom: 4rem;
  ${mobile({ margin: "2rem 0" })}
`;
const SuccessText = styled.p`
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  text-align: center;
  ${mobile({ fontSize: "1.4rem" })}
`;
