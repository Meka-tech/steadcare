import React, { useState } from "react";
import { Button } from "../../../../Components";
import { AuthMargin, Body, Container, LogoDiv } from "../../style";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./otp.styles.css";

export const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, phoneNumber } = location.state;
  const [OTP, setOTP] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = {
      email: `${email}`,
      hash: sessionStorage.getItem("OTPHASH"),
      code: `${OTP}`
    };

    const config = {
      method: "post",
      url: `${BaseUrl}/user-token-verification`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function () {
        setIsLoading(false);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
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
          <Link>Resend code</Link>
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
  margin-top: 25px;
  margin-left: -100px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin: 20px 0;
`;
const OtpInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
`;

const Subtitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: center;
  width: 70%;
`;
const Link = styled.p`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(0, 0, 255, 1);
  text-align: center;
  margin-bottom: 15px;
`;
const ButtonDiv = styled.div`
  margin-top: 20px;
`;
