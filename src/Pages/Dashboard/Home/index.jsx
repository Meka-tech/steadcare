import React from "react";
import styled from "styled-components";
import { DashboardNavbar, PasswordForm, TextForm } from "../../../Components";
import { Dropdown } from "../../../Components/Form/dropDown";
import { Body, Container } from "../style";

export const Dashboard = () => {
  return (
    <Container>
      <DashboardNavbar />
      <Body>
        <PasswordForm title={"hey"} />
        <Dropdown items={["Male", "Female", "others"]} title={"Gender"} />
      </Body>
    </Container>
  );
};
