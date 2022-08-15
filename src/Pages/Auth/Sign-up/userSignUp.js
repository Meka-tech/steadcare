import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BaseUrl } from "../../../Utilities";
import {
  Button,
  CheckBox,
  PasswordForm,
  SwitchTab,
  TextForm
} from "../../../Components";
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
} from "../style";
import { useNavigate } from "react-router";

export const UserSignUp = () => {
  const navigate = useNavigate();
  const axios = require("axios").default;
  ///Name State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState(" ");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("patient");

  //set Role function
  const SetRoleFunc = (role) => {
    setRole(role);
  };

  const [validEmail, setValidEmail] = useState(false);
  // const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  ///REGEX

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const USER_REGEX = /^[a-z ,.'-]+$/i;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  ///error Messages

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  //useEffect

  //Password Validations
  useEffect(() => {
    if (password !== "" && confirmPassword !== "") {
      if (password === confirmPassword) {
        setConfirmPasswordErr("");
      }
      if (password !== confirmPassword) {
        setConfirmPasswordErr("Passwords do not match");
      }
    } else {
      setConfirmPasswordErr("");
    }
    if (password !== "") {
      if (PASSWORD_REGEX.test(password)) {
        setValidPassword(true);
        setPasswordErr("");
      } else {
        setValidPassword(false);
        setPasswordErr(
          "Your password should be atleast 8 characters long with a number"
        );
      }
    } else {
      setPasswordErr("");
    }
  }, [password, confirmPassword, PASSWORD_REGEX]);

  //Email validation
  useEffect(() => {
    if (email !== "") {
      if (EMAIL_REGEX.test(email) === false) {
        setEmailErr(
          "Please enter an email in the valid format e.g example@gmail.com"
        );
      } else {
        setEmailErr("");
        setValidEmail(true);
      }
    } else {
      setEmailErr("");
      setValidEmail(false);
    }
  }, [email, EMAIL_REGEX]);

  //Phone Number Validation
  // useEffect(() => {
  //   if (phoneNumber.length === 11) {
  //     setValidPhoneNumber(true);
  //   } else {
  //     setValidPhoneNumber(false);
  //   }
  // }, [phoneNumber]);

  //user Name Validation
  useEffect(() => {
    // if (firstName !== "") {
    //   if (USER_REGEX.test(firstName)) {
    //     setFirstNameError("");
    //   } else {
    //     setFirstNameError("first name should be 3 or more characters");
    //   }
    // } else {
    //   setFirstNameError("");
    // }
    // if (lastName !== "") {
    //   if (USER_REGEX.test(lastName)) {
    //     setLastNameError("");
    //   } else {
    //     setLastNameError("Last name should be 3 or more characters");
    //   }
    // } else {
    //   setLastNameError("");
    // }
    if (USER_REGEX.test(userName)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
    setUserName(firstName + " " + lastName);
  }, [firstName, lastName, USER_REGEX, userName]);
  /////API Call Axios

  const handleSubmit = async (e) => {
    if (
      validEmail &&
      password === confirmPassword &&
      validPassword &&
      validName
    ) {
      if (role === "doctor") {
        navigate("/sign-up/doctorProfile", {
          state: {
            userName,
            email,
            password,
            phoneNumber,
            confirmPassword
          }
        });
      } else {
        const data = {
          name: `${userName}`,
          email: `${email}`,
          password: `${password}`,
          confirmPassword: `${confirmPassword}`,
          role: `${role.toLowerCase()}`
        };

        const config = {
          method: "post",
          url: `${BaseUrl}/create-user-account`,
          headers: {},
          data: data
        };

        axios(config)
          .then(function () {
            navigate("/sign-up/otpVerification", {
              state: {
                email,
                phoneNumber
              }
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  return (
    <Container>
      <AuthMargin />
      <Body>
        <LogoDiv />
        <SwitchTab labels={["Patient", "Doctor"]} OnSelect={SetRoleFunc} />
        <Forms>
          <TextForm
            title={"First Name"}
            inputValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            errorMsg={firstNameError}
            width={"290px"}
          />
          <TextForm
            title={"Last Name"}
            inputValue={lastName}
            onChange={(e) => setLastName(e.target.value)}
            errorMsg={lastNameError}
            width={"290px"}
          />
          <TextForm
            title={"Email "}
            inputValue={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMsg={emailErr}
            width={"290px"}
          />
          <TextForm
            title={"Phone Number"}
            inputValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            width={"290px"}
          />
          <PasswordForm
            title={"Password"}
            inputValue={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMsg={passwordErr}
            width={"290px"}
          />
          <PasswordForm
            title={"Confirm Password"}
            inputValue={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMsg={confirmPasswordErr}
            width={"290px"}
          />
        </Forms>
        <CheckBoxDiv>
          <CheckBox onChange={() => {}} />
          <CheckBoxTextSpan>
            <GrayText>I agree to the </GrayText>
            <BlueText>Term & Conditions </BlueText>
            <GrayText>and </GrayText>
            <BlueText>Privacy Policy</BlueText>
            <GrayText>.</GrayText>
          </CheckBoxTextSpan>
        </CheckBoxDiv>
        <CheckBoxDiv>
          <CheckBox onChange={() => {}} />
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
            onClick={() => {
              handleSubmit();
            }}
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
  margin: 20px 0px;
`;
