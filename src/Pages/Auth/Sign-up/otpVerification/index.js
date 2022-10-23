import React, { useState } from "react";
import { Button } from "../../../../Components";
import { AuthMargin, Body, Container, LogoDiv } from "../../style";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch } from "react-redux/es/exports";

import "./otp.styles.css";
import {
  updatePatient,
  updatePatientToken
} from "../../../../features/userDetails";
import {
  updateLoggedIn,
  updateLoggedInRole
} from "../../../../features/loggedIn/loginSlice";
import { mobile } from "../../../../Utilities/responsive";

export const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, phoneNumber } = location.state;
  const [OTP, setOTP] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (OTP.length === 4) {
      setIsLoading(true);
      const data = {
        email: `${email}`,
        hash: sessionStorage.getItem("OTPHASH"),
        code: OTP
      };

      const config = {
        method: "post",
        url: `${BaseUrl}/user-token-verification`,
        headers: {},
        data: data
      };

      axios(config)
        .then(function (res) {
          const userDetails = res.data.data;
          const Token = userDetails.Token;
          dispatch(updatePatient({ userDetails }));
          dispatch(updatePatientToken(Token));
          dispatch(updateLoggedIn(true));
          dispatch(updateLoggedInRole("patient"));
          setIsLoading(false);
          navigate("/patient/home");
        })
        .catch(function (error) {
          const Error = error;
          alert(Error.response.data.message);
          setOTP("");
          setIsLoading(false);
        });
    }
  };

  const onResendOTP = () => {
    setIsLoading(true);
    const data = { email: `${email}` };

    const config = {
      method: "post",
      url: `${BaseUrl}/resend-code`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function () {
        setIsLoading(false);
      })
      .catch(function (error) {
        const Error = error;
        alert(Error.response.data.message);
        setOTP("");
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <AuthMargin />
      <Body>
        <Content>
          <LogoDiv />
          <Title>Enter verification code</Title>
          <Subtitle>
            We have just sent a verification code to {email} and {phoneNumber}
          </Subtitle>
          <OtpInput>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              inputClassName={"inputStyles"}
              className={"container"}
            />
          </OtpInput>
          <Link onClick={() => onResendOTP()}>Resend code</Link>
          <Link>Change phone number</Link>
          <ButtonDiv>
            <Button
              text="Verify"
              onClick={() => handleSubmit()}
              isLoading={isLoading}
            />
          </ButtonDiv>
        </Content>
      </Body>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  ${mobile({
    marginTop: "1rem"
  })}
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.4rem;
  text-align: center;
  margin: 2rem 0;
  ${mobile({
    marginTop: "1rem"
  })}
`;
const OtpInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;

  ${mobile({
    width: "80%"
  })};
`;

const Subtitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: 0.04em;
  text-align: center;
  width: 70%;
  ${mobile({
    width: "85%",
    fontSize: "1.4rem"
  })}
`;
const Link = styled.p`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  color: rgba(0, 0, 255, 1);
  text-align: center;
  margin-bottom: 1.5rem;
`;
const ButtonDiv = styled.div`
  margin-top: 2rem;
`;
