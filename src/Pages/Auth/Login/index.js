import React, { useState } from "react";
import {
  AuthMargin,
  Body,
  CheckBoxDiv,
  CheckBoxTextSpan,
  Container,
  GrayText,
  Headers,
  LogoDiv,
  SubHeader,
  TabContent
} from "../style";
import styled from "styled-components";
import { Button, CheckBox, PasswordForm, TextForm } from "../../../Components";
import { BaseUrl } from "../../../Utilities";
import axios from "axios";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const axios = require("axios");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const data = { email: `${email}`, password: `${password}` };

    const config = {
      method: "post",
      url: `${BaseUrl}/login`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
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
        <TabContent>
          <Headers>Sign in</Headers>
          <SubHeader>
            Sign in with your details used in registration for you to book a
            doctor.
          </SubHeader>
          <Forms>
            <TextForm
              title="Email"
              inputValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordForm
              title={"Password"}
              inputValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <CheckBoxDiv>
              <CheckBox onChange={() => {}} />
              <CheckBoxTextSpan>
                <GrayText>Remember Me</GrayText>
              </CheckBoxTextSpan>
            </CheckBoxDiv>
            <ButtonDiv>
              <Button
                text="Login"
                onClick={() => handleSubmit()}
                width="100%"
              />
            </ButtonDiv>
            <Span>
              Don’t have an account?
              <h4 onClick={() => navigate("/sign-up")}>Sign Up</h4>
            </Span>
            <Span>
              <h4>Forgot Password ?</h4>
            </Span>
          </Forms>
        </TabContent>
      </Body>
    </Container>
  );
};

const Forms = styled.div`
  width: 50%;
  margin: 30px 0;
`;
const ButtonDiv = styled.div`
  width: 100%;
  margin: 25px 0;
`;
const Span = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  h4 {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 255, 0.9);
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;
