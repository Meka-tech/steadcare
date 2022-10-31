import React, { useState } from "react";
import {
  AdminDashboardNavbar,
  Button,
  CheckBox,
  DashboardNavbar,
  PasswordForm
} from "../../../../Components";
import { Body, Container } from "../../style";
import { TopBar } from "../component";
import {
  ButtonField,
  ChangePasswords,
  CheckBoxField,
  Main,
  Notification,
  PasswordField,
  Title,
  WhiteDiv
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import { useSelector } from "react-redux";
import * as Yup from "yup";

export const AdminSettings = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.reducer.adminDetails.token);

  const UpdateProfile = async () => {
    setLoading(true);
    const data = {
      oldPassword: `${values.oldPassword}`,
      password: `${values.password}`,
      confirmPassword: `${values.confirmPassword}`
    };

    const config = {
      method: "patch",
      url: `${BaseUrl}/update-profile`,
      headers: { Authorization: "Bearer " + token },
      data: data
    };

    axios(config)
      .then(function (response) {
        toast.success(response.data.message);
        setLoading(false);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);

        setLoading(false);
      });
  };
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required("Please Enter your current password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
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

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema,
    onSubmit: UpdateProfile
  });

  return (
    <Container>
      <AdminDashboardNavbar active={"Settings"} role={"admin"} />
      <Body>
        <TopBar role="admin" />
        <Main>
          <Title>Settings</Title>
          <WhiteDiv>
            <ChangePasswords>
              <h1>Change Password</h1>
              <div>
                <h2>Current password</h2>
                <PasswordField>
                  <PasswordForm
                    inputValue={values.oldPassword}
                    onChange={handleChange("oldPassword")}
                    errorMsg={touched.oldPassword && errors.oldPassword}
                  />
                </PasswordField>
              </div>
              <div>
                <h2>New password</h2>
                <PasswordField>
                  <PasswordForm
                    inputValue={values.password}
                    onChange={handleChange("password")}
                    errorMsg={touched.password && errors.password}
                  />
                </PasswordField>
              </div>
              <div>
                <h2>Confirm password</h2>
                <PasswordField>
                  <PasswordForm
                    inputValue={values.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    errorMsg={touched.confirmPassword && errors.confirmPassword}
                  />
                </PasswordField>
              </div>
              <ButtonField>
                <Button
                  text="Save Changes"
                  type="submit"
                  onClick={handleSubmit}
                  isLoading={loading}
                />
                <ToastContainer />
              </ButtonField>
            </ChangePasswords>
            <Notification>
              <h1>Notifications</h1>
              <div>
                <h2>SMS</h2>
                <CheckBox />
              </div>
              <div>
                <h2>Email</h2>
                <CheckBox />
              </div>
            </Notification>
          </WhiteDiv>
        </Main>
      </Body>
    </Container>
  );
};