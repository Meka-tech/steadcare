import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, TextForm } from "../../../Components";
import styled from "styled-components";
import {
  AuthMargin,
  Body,
  Container,
  Headers,
  LogoDiv,
  MarginLeft,
  SubHeader,
  TabContent
} from "../style";
import axios from "axios";
import { BaseUrl } from "../../../Utilities";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const Schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required")
  });
  const OnHandleSubmit = () => {
    setIsLoading(true);
    const data = { email: values.email };

    const config = {
      method: "post",
      url: `${BaseUrl}/forgot-password`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        setIsLoading(false);
        navigate("/reset-password/email-sent");
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };
  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Schema,
    onSubmit: OnHandleSubmit
  });
  return (
    <Container>
      <AuthMargin />
      <Body>
        <LogoDiv />
        <MarginLeft>
          <TabContent>
            <Headers>Reset Password</Headers>
            <SubHeader>
              Enter the email linked with your account and we’ll send you
              instructions to reset your password.
            </SubHeader>
            <Forms>
              <TextForm
                title="Email Address"
                inputValue={values.email}
                onChange={handleChange("email")}
                errorMsg={touched.email && errors.email}
              />
              <ButtonDiv>
                <Button
                  text="Submit"
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  width="100%"
                  type="submit"
                />
              </ButtonDiv>
              <Span>
                Don’t have an account?
                <h4 onClick={() => navigate("/sign-up")}>Sign Up</h4>
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
