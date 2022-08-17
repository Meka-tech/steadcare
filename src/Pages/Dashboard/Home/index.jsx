import React from "react";
import styled from "styled-components";
import {
  Button,
  DashboardNavbar,
  PasswordForm,
  TextForm
} from "../../../Components";
import { SwitchTab } from "../../../Components";
import { Body, Container } from "../style";
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <DashboardNavbar />
      <Body>
        <Button onClick={() => navigate("/sign-up")} />
      </Body>
    </Container>
  );
};
