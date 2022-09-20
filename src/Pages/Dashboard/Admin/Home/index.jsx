import React from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { Body, Container } from "../../style";

export const AdminDashboard = () => {
  return (
    <Container>
      <AdminDashboardNavbar role="admin" />
      <Body></Body>
    </Container>
  );
};
