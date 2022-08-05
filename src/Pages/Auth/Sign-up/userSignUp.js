import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Button,
  CheckBox,
  PasswordForm,
  SwitchTab,
  TextForm,
} from "../../../Components";
import {
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
  Span,
} from "../style";

export const UserSignUp = () => {
  ///Name State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  ///REGEX
  const USER_REGEX = /^[a-z ,.'-]+$/i;
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  ///err

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  //useEffect
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
  }, [password, confirmPassword]);

  useEffect(() => {
    if (email !== "") {
      if (EMAIL_REGEX.test(email) === false) {
        setEmailErr(
          "Please enter an email in the valid format e.g example@gmail.com"
        );
      } else {
        setEmailErr("");
      }
    } else {
      setEmailErr("");
    }
  }, [email, EMAIL_REGEX]);

  return (
    <Container>
      <Margin></Margin>
      <Body>
        <LogoDiv />
        <SwitchTab labels={["Patient", "Doctor"]} />
        <Forms>
          <TextForm
            title={"First Name"}
            inputValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextForm
            title={"Last Name"}
            inputValue={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextForm
            title={"Email "}
            inputValue={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMsg={emailErr}
          />
          <TextForm
            title={"Phone Number"}
            inputValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <PasswordForm
            title={"Password"}
            inputValue={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMsg={passwordErr}
          />
          <PasswordForm
            title={"Confirm Password"}
            inputValue={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMsg={confirmPasswordErr}
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
          <Button fontSize={"14px"} text="Create Account" />
        </ButtonDiv>
        <Span>
          <BoldText>Already have an account?</BoldText>
          <BlueText style={{ cursor: "pointer" }}> Log in</BlueText>
        </Span>
      </Body>
    </Container>
  );
};

const ButtonDiv = styled.div`
  margin: 20px 0px;
`;
