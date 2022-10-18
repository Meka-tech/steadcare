import { useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../../component";
import {
  DocumentListContainer,
  Tab,
  TabBody,
  TabBodyText,
  TabContainer
} from "../style";
import { Column } from "./Column";

export const DocumentList = ({ data, loading = false }) => {
  const token = useSelector((state) => state.reducer.adminDetails.token);
  const [activeTab, setActiveTab] = useState("DD");

  return (
    <DocumentListContainer>
      <TabContainer>
        <Tab active={activeTab === "DD"} onClick={() => setActiveTab("DD")}>
          <h1>Doctors Documents</h1>
        </Tab>
        <Tab active={activeTab === "PD"} onClick={() => setActiveTab("PD")}>
          <h1>Patients Documents</h1>
        </Tab>
      </TabContainer>
      <TabBody>
        <Column />
      </TabBody>
    </DocumentListContainer>
  );
};
