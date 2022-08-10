import React, { useState } from "react";
import { Button, SwitchTab, TextForm } from "../../../Components";
import { Dropdown } from "../../../Components/Form/dropDown";
import {
  Body,
  Container,
  Headers,
  LogoDiv,
  Margin,
  SubHeader,
  TabContent
} from "../style";
import styled from "styled-components";

export const DoctorProfile = () => {
  const [tab, setTab] = useState("General");

  const setTabFunction = (tab) => {
    setTab(tab);
  };
  const General = () => {
    return (
      <TabContent>
        <Headers>Profile</Headers>
        <SubHeader></SubHeader>
        <Button text={"Next"} fontSize={"14px"} />
      </TabContent>
    );
  };

  const Documents = () => {
    return (
      <TabContent>
        <Headers>Upload Documents</Headers>
        <SubHeader>
          All files should have descriptive file names. Only jpeg and pdf are
          accepted.
        </SubHeader>
        <Button text={"Next"} fontSize={"14px"} />
      </TabContent>
    );
  };

  const BankAccount = () => {
    const BankAccounts = [
      "Access Bank",
      "Access Bank",
      "Access Bank",
      "Access Bank",
      "Access Bank",
      "Access Bank",
      "Access Bank",
      "Access Bank"
    ];
    return (
      <TabContent>
        <Headers>Bank Details</Headers>
        <SubHeader>
          Fill your bank details in order to receive payments for completed
          sessions from patients.
        </SubHeader>
        <BankAccountForms>
          <Dropdown
            title={"Select Bank"}
            label="Choose a Bank"
            items={BankAccounts}
          />
          <TextForm title={"Account Name"} placeholder={"Account Name"} />
          <TextForm title={"Account Number"} />
        </BankAccountForms>
        <Button text={"Verify"} fontSize={"14px"} />
      </TabContent>
    );
  };
  return (
    <Container>
      <Margin></Margin>
      <Body>
        <LogoDiv />
        <SwitchTab
          labels={["General", "Documents", "Bank Account"]}
          OnSelect={setTabFunction}
        />
        {tab === "General" ? <General /> : null}
        {tab === "Documents" ? <Documents /> : null}
        {tab === "Bank Account" ? <BankAccount /> : null}
      </Body>
    </Container>
  );
};

const BankAccountForms = styled.div`
  margin-top: 20px;
  width: 40%;
  margin-bottom: 20px;
`;
