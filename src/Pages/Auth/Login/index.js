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
import {
  updatePatient,
  updatePatientToken
} from "../../../features/userDetails/patientSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  updateDoctor,
  updateDoctorToken
} from "../../../features/userDetails/doctorSlice";
import {
  updateLoggedIn,
  updateLoggedInRole
} from "../../../features/loggedIn/loginSlice";
import {
  updateAdmin,
  updateAdminToken
} from "../../../features/userDetails/adminSlice";
import { mobile } from "../../../Utilities/responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [RememberMe, setRememberMe] = useState(true);
  const dispatch = useDispatch();

  const Dispatch = (response) => {
    const Token = response.data.data.token;
    const userDetails = response.data.data.user;
    const role = userDetails.role;
    toast.success(response.data.message);
    if (role === "doctor") {
      dispatch(updateDoctor({ userDetails }));
      dispatch(updateDoctorToken(Token));
      dispatch(updateLoggedInRole("doctor"));
    } else if (role === "patient") {
      dispatch(updatePatient({ userDetails }));
      dispatch(updatePatientToken(Token));
      dispatch(updateLoggedInRole("patient"));
    } else {
      dispatch(updateAdmin({ userDetails }));
      dispatch(updateAdminToken(Token));
      dispatch(updateLoggedInRole("admin"));
    }
    dispatch(updateLoggedIn(true));
    setIsLoading(false);
    setTimeout(() => navigate(`/${role}/home`), 2000);
  };
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
        Dispatch(response);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
        toast.error(error.data.message);
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
                <CheckBox
                  active={!RememberMe}
                  toggle={() => {
                    setRememberMe(!RememberMe);
                  }}
                />
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
                <ToastContainer />
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
  margin: 3rem 0;
  ${mobile({
    width: "100%"
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
    display: "block",
    width: "100%"
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
