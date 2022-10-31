import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, TextForm } from "../../../Components";
import styled from "styled-components";
import {
  AuthMargin,
  Body,
  Container,
  LogoDiv,
  MarginLeft,
  TabContent
} from "../style";
import axios from "axios";
import { BaseUrl } from "../../../Utilities";
import { useFormik } from "formik";
import * as Yup from "yup";
import { mobile } from "../../../Utilities/responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      .then(function (res) {
        toast.success(res.data.message);
        setIsLoading(false);
        navigate("/reset-password/email-sent", {
          state: {
            email: values.email
          }
        });
      })
      .catch(function (err) {
        toast.error(err.response.data.message);
        setIsLoading(false);
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
                <ToastContainer />
              </ButtonDiv>
              <Span>
                Don’t have an account?
                <h4 onClick={() => navigate("/sign-up")}> Sign Up</h4>
              </Span>
            </Forms>
          </TabContent>
        </MarginLeft>
      </Body>
    </Container>
  );
};
const SubHeader = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.5rem;
  text-align: center;
  width: 50%;
  margin-top: 1rem;
  color: rgba(34, 34, 34, 0.8);
  margin-left: auto;
  margin-right: auto;
  ${mobile({
    width: "80%",
    textAlign: "left"
  })}
`;

const Headers = styled.h2`
  font-weight: 600;
  font-size: 2.2rem;
  color: black;
  line-height: 3.413rem;
  text-align: center;
  margin: 0;
  padding: 0;
  ${mobile({
    margin: "auto",
    width: "80%",
    textAlign: "left"
  })}
`;
const Forms = styled.div`
  width: 50%;
  margin: 3rem 0;
  margin-left: auto;
  margin-right: auto;
  ${mobile({
    width: "80%"
  })}
`;
const ButtonDiv = styled.div`
  width: 100%;
  margin: 2.5rem 0;
`;
const Span = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  ${mobile({
    textAlign: "left",
    display: "block"
  })}
  h4 {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 255, 0.9);
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    ${mobile({
      display: "inline"
    })}
  }
`;
