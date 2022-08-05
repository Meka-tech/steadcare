import React from "react";
import styled from "styled-components";
import {
  Button,
  DashboardNavbar,
  PasswordForm,
  TextForm,
} from "../../../Components";
import { SwitchTab } from "../../../Components";
import { Body, Container } from "../style";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Container>
      <DashboardNavbar />
      <Body>
        <Link to="/sign-up">
          <Button />
        </Link>
      </Body>
    </Container>
  );
};
