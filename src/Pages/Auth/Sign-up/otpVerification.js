import React from "react";
import { Button } from "../../../Components";
import { AuthMargin, Body, Container, LogoDiv } from "../style";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { BaseUrl } from "../../../Utilities";

const OtpVerification = () => {
  const navigation = useNavigate();
  const axios = require("axios");
  const location = useLocation();
  const { email, phoneNumber } = location.state;

  const handleSubmit = async () => {
    const data = {
      email: `${email}`,
      hash: "c90d6d78de34115a13613257819b064ec16b0157d786126362076fbef8235b28.1659375185131",
      code: "517999"
    };

    const config = {
      method: "post",
      url: `${BaseUrl}/user-token-verification`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function () {
        navigation.navigate("/");
      })
      .catch(function (error) {
        console.log(error);
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
          <OtpInput></OtpInput>
          <Link>Resend code</Link>
          <Link>Change phone number</Link>
          <Button text="Verify" onClick={() => handleSubmit()} />
        </Content>
      </Body>
    </Container>
  );
};

export default OtpVerification;

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
  font-size: 26px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin: 25px 0;
`;
const OtpInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
`;

const Subtitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: center;
  width: 80%;
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
