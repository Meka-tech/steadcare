import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, PasswordForm } from "../../../Components";
import styled from "styled-components";
import { AuthMargin, Body, Container, LogoDiv, TabContent } from "../style";
import axios from "axios";
import { BaseUrl } from "../../../Utilities";
import { useFormik } from "formik";
import * as Yup from "yup";
import { mobile } from "../../../Utilities/responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateNewPassword = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const token = search.split("=")[1];

  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
  });

  const OnHandleSubmit = () => {
    setIsLoading(true);
    const data = {
      token,
      password: values.password,
      confirmPassword: values.confirmPassword
    };

    const config = {
      method: "post",
      url: `${BaseUrl}/reset-password`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        setIsLoading(false);
        toast.success(response.data.message);
        navigate("/login");
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema,
    onSubmit: OnHandleSubmit
  });

  return (
    <Container>
      <AuthMargin />
      <Body>
        <LogoDiv />
        <TabContent>
          <Headers>Create new password</Headers>
          <SubHeader>
            Your new password must be different from your previous password.
          </SubHeader>
          <Forms>
            <PasswordForm
              title={"Password"}
              inputValue={values.password}
              onChange={handleChange("password")}
              errorMsg={touched.password && errors.password}
            />
            <PasswordForm
              title={"Confirm Password"}
              inputValue={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              errorMsg={touched.confirmPassword && errors.confirmPassword}
            />
            <ButtonDiv>
              <Button
                text="Reset Password"
                onClick={handleSubmit}
                width="100%"
                type="submit"
                isLoading={isLoading}
              />
              <ToastContainer />
            </ButtonDiv>
          </Forms>
        </TabContent>
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
  width: 100%;
  color: rgba(34, 34, 34, 0.8);
  ${mobile({
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
    textAlign: "left"
  })}
`;

const Forms = styled.div`
  width: 40%;
  margin-top: 4rem;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  ${mobile({
    width: "95%"
  })}
`;

const ButtonDiv = styled.div`
  width: 100%;
  margin: 2.5rem 0;
`;
