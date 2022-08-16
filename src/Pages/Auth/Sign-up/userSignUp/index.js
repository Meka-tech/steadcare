import React, { useEffect, useRef, useState } from "react";
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
  Span
} from "../../style";
import { useNavigate } from "react-router";
import { useFormik } from "formik";

export const UserSignUp = () => {
  const navigate = useNavigate();
  const axios = require("axios").default;
  ///Name State
  const [name, setName] = useState(" ");
  const [role, setRole] = useState("patient");
  const [isLoading, setIsLoading] = useState(false);
  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const [receiveEmails, setReceiveEmails] = useState(false);

  //set Role function
  const SetRoleFunc = (role) => {
    setRole(role);
  };

  const onhandleSubmit = async () => {
    if (role === "Doctor") {
      navigate("/sign-up/doctorProfile", {
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
          navigate("/sign-up/otpVerification", {
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

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/.test(values.password)
    ) {
      errors.password =
        "your password should contain atleast 8 charaters, a Capital letter, small letter and number !";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password does not match";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (values.phoneNumber.length !== 11) {
      errors.phoneNumber = "invalid phone number";
    }

    return errors;
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: ""
    },
    validate,
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
        <SwitchTab labels={["Patient", "Doctor"]} OnSelect={SetRoleFunc} />
        <Forms>
          <TextForm
            title={"First Name"}
            inputValue={values.firstName}
            onChange={handleChange("firstName")}
            width={"290px"}
            errorMsg={errors.firstName}
          />
          <TextForm
            title={"Last Name"}
            inputValue={values.lastName}
            onChange={handleChange("lastName")}
            width={"290px"}
            errorMsg={errors.lastName}
          />
          <TextForm
            title={"Email "}
            inputValue={values.email}
            onChange={handleChange("email")}
            width={"290px"}
            errorMsg={errors.email}
          />
          <TextForm
            title={"Phone Number"}
            inputValue={values.phoneNumber}
            onChange={handleChange("phoneNumber")}
            width={"290px"}
            errorMsg={errors.phoneNumber}
          />
          <PasswordForm
            title={"Password"}
            inputValue={values.password}
            onChange={handleChange("password")}
            width={"290px"}
            errorMsg={errors.password}
          />
          <PasswordForm
            title={"Confirm Password"}
            inputValue={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            width={"290px"}
            errorMsg={errors.confirmPassword}
          />
        </Forms>
        <CheckBoxDiv>
          <CheckBox
            onChange={() => {
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
            onChange={() => {
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
      </Body>
    </Container>
  );
};
const ButtonDiv = styled.div`
  margin: 10px 0px;
`;
