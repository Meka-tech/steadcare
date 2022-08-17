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
  MarginLeft,
  SubHeader,
  TabContent
} from "../style";
import styled from "styled-components";
import { Button, CheckBox, PasswordForm, TextForm } from "../../../Components";
import { BaseUrl } from "../../../Utilities";
import axios from "axios";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const OnHandleSubmit = async () => {
    setIsLoading(true);
    const data = { email: `${values.email}`, password: `${values.password}` };

    const config = {
      method: "post",
      url: `${BaseUrl}/login`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);

        setIsLoading(false);
      })
      .catch(function (error) {
        const Error = error;
        setIsLoading(false);
        alert(Error.response.data.message);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: OnHandleSubmit
  });

  return (
    <Container>
      <AuthMargin />
      <Body>
        <LogoDiv />
        <MarginLeft>
          <TabContent>
            <Headers>Sign in</Headers>
            <SubHeader>
              Sign in with your details used in registration for you to book a
              doctor.
            </SubHeader>
            <Forms>
              <TextForm
                title="Email"
                inputValue={values.email}
                onChange={handleChange("email")}
                errorMsg={touched.email && errors.email}
              />
              <PasswordForm
                title={"Password"}
                inputValue={values.password}
                onChange={handleChange("password")}
                errorMsg={touched.password && errors.password}
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
                  onClick={handleSubmit}
                  width="100%"
                  type="submit"
                  isLoading={isLoading}
                />
              </ButtonDiv>
              <Span>
                Don’t have an account?
                <h4 onClick={() => navigate("/sign-up")}>Sign Up</h4>
              </Span>
              <Span>
                <h4 onClick={() => navigate("/reset-password")}>
                  Forgot Password ?
                </h4>
              </Span>
            </Forms>
          </TabContent>
        </MarginLeft>
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
