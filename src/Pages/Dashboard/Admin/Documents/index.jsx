import React from "react";

import { AdminDashboardNavbar } from "../../../../Components";
import { TopBar } from "../../Patient/component";
import { Body, Container } from "../../style";
import { DocumentList } from "./components/DocumentList";

export const AdminDocuments = () => {
  return (
    <Container>
      <AdminDashboardNavbar role="admin" active="Documents" />
      <Body>
        <TopBar role="admin" />
        <DocumentList />
      </Body>
    </Container>
  );
};
