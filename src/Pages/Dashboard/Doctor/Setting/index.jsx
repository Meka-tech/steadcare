import React from "react";
import {
  Button,
  CheckBox,
  DashboardNavbar,
  DoctorDashboardNavbar,
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

export const DoctorSettings = () => {
  return (
    <Container>
      <DoctorDashboardNavbar active={"Settings"} role={"doctor"} />
      <Body>
        <TopBar />
        <Main>
          <Title>Settings</Title>
          <WhiteDiv>
            <ChangePasswords>
              <h1>Change Password</h1>
              <div>
                <h2>Current password</h2>
                <PasswordField>
                  <PasswordForm />
                </PasswordField>
              </div>
              <div>
                <h2>New password</h2>
                <PasswordField>
                  <PasswordForm />
                </PasswordField>
              </div>
              <div>
                <h2>Confirm password</h2>
                <PasswordField>
                  <PasswordForm />
                </PasswordField>
              </div>
              <ButtonField>
                <Button text="Save Changes" />
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
