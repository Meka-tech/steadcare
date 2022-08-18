import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseUrl } from "../../../../Utilities";
import {
  Button,
  CheckBox,
  PasswordForm,
  SwitchTab,
  TextForm
} from "../../../../Components";
import {
  AuthMargin,
  BlueText,
  Body,
  BoldText,
  CheckBoxDiv,
  CheckBoxTextSpan,
  Container,
  Forms,
  GrayText,
  LogoDiv,
  Margin,
  MarginLeft,
  Span
} from "../../style";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

export const UserSignUp = () => {
  const navigate = useNavigate();
  const axios = require("axios").default;
  ///Name State
  const [name, setName] = useState(" ");
  const [role, setRole] = useState("patient");
  const [isLoading, setIsLoading] = useState(false);
  const [termsCheckbox, setTermsCheckbox] = useState(true);
  const [receiveEmails, setReceiveEmails] = useState(true);

  //set Role function
  const SetRoleFunc = (role) => {
    setRole(role);
  };

  const onhandleSubmit = async () => {
    if (role === "Doctor") {
      navigate("/sign-up/doctor-profile", {
        state: {
          name,
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          confirmPassword: values.confirmPassword
        }
      });
    } else {
      setIsLoading(true);
      const data = {
        name: `${name}`,
        email: `${values.email}`,
        password: `${values.password}`,
        confirmPassword: `${values.confirmPassword}`,
        phone: `${values.phoneNumber}`,
        role: `${role.toLowerCase()}`
      };

      const config = {
        method: "post",
        url: `${BaseUrl}/create-user-account`,
        headers: {},
        data: data
      };

      axios(config)
        .then(function (res) {
          sessionStorage.setItem("OTPHASH", res.data.data.otpHash);
          setIsLoading(false);
          navigate("/sign-up/otp-verification", {
            state: {
              email: values.email,
              phoneNumber: values.phoneNumber
            }
          });
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: ""
    },
    validationSchema,
    onSubmit: onhandleSubmit
  });
  useEffect(() => {
    setName(values.firstName + " " + values.lastName);
  }, [values.firstName, values.lastName]);

  return (
    <Container>
      <AuthMargin />
      <Body>
        <LogoDiv />
        <MarginLeft>
          <SwitchTab labels={["Patient", "Doctor"]} OnSelect={SetRoleFunc} />
          <Forms>
            <TextForm
              title={"First Name"}
              inputValue={values.firstName}
              onChange={handleChange("firstName")}
              width={"290px"}
              errorMsg={touched.firstName && errors.firstName}
            />
            <TextForm
              title={"Last Name"}
              inputValue={values.lastName}
              onChange={handleChange("lastName")}
              width={"290px"}
              errorMsg={touched.lastName && errors.lastName}
            />
            <TextForm
              title={"Email "}
              inputValue={values.email}
              onChange={handleChange("email")}
              width={"290px"}
              errorMsg={touched.email && errors.email}
            />
            <TextForm
              title={"Phone Number"}
              inputValue={values.phoneNumber}
              onChange={handleChange("phoneNumber")}
              width={"290px"}
              errorMsg={touched.phoneNumber && errors.phoneNumber}
            />
            <PasswordForm
              title={"Password"}
              inputValue={values.password}
              onChange={handleChange("password")}
              width={"290px"}
              errorMsg={touched.password && errors.password}
            />
            <PasswordForm
              title={"Confirm Password"}
              inputValue={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              width={"290px"}
              errorMsg={touched.confirmPassword && errors.confirmPassword}
            />
          </Forms>
          <CheckBoxDiv>
            <CheckBox
              active={!termsCheckbox}
              toggle={() => {
                setTermsCheckbox(!termsCheckbox);
              }}
            />
            <CheckBoxTextSpan>
              <GrayText>I agree to the </GrayText>
              <BlueText>Term & Conditions </BlueText>
              <GrayText>and </GrayText>
              <BlueText>Privacy Policy</BlueText>
              <GrayText>.</GrayText>
            </CheckBoxTextSpan>
          </CheckBoxDiv>
          <CheckBoxDiv>
            <CheckBox
              active={!receiveEmails}
              toggle={() => {
                setReceiveEmails(!receiveEmails);
              }}
            />
            <CheckBoxTextSpan>
              <GrayText>Yes, I want to receive </GrayText>
              <BlueText>Steadcare</BlueText>
              <GrayText>emails.</GrayText>
            </CheckBoxTextSpan>
          </CheckBoxDiv>
          <ButtonDiv>
            <Button
              type="submit"
              fontSize={"14px"}
              text="Create Account"
              isLoading={isLoading}
              onClick={handleSubmit}
            />
          </ButtonDiv>
          <Span>
            <BoldText>Already have an account?</BoldText>
            <BlueText
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              {" "}
              Log in
            </BlueText>
          </Span>
        </MarginLeft>
      </Body>
    </Container>
  );
};
const ButtonDiv = styled.div`
  margin: 1rem 0;
`;
