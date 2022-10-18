import React from "react";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Button } from "../../../../../Components";
import useClickOutside from "../../../../../hooks/useClickOutside";
import ApproveBadge from "../../../../../Images/approveBadge.png";

export const YesNoModal = ({ text, setActive, action }) => {
  const Ref = useRef();
  useClickOutside(Ref, () => setActive(false));
  return (
    <Shade>
      <YesNoDiv ref={Ref}>
        <YesNoText>{text}</YesNoText>
        <YesNoButtons>
          <Button
            text="Yes"
            bgColor={"blue"}
            onClick={action}
            width="fit-content"
            height={"3rem"}
            fontSize="1.2rem"
          />
          <Button
            text="No"
            bgColor={"red"}
            onClick={() => setActive(false)}
            width="fit-content"
            height={"3rem"}
            fontSize="1.2rem"
          />
        </YesNoButtons>
      </YesNoDiv>
    </Shade>
  );
};

const Shade = styled.div`
  top: 0;
  position: fixed;
  z-index: 10;
  background: rgba(255, 255, 255, 0.6);
  width: 90%;
  height: 100%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YesNoDiv = styled.div`
  border: 1px solid rgba(0, 0, 255, 1);
  background-color: white;
  width: 40rem;
  height: 20rem;
  box-sizing: border-box;
  padding: 3rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const YesNoText = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
`;
const YesNoButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RegistrationModal = ({ setActive, patient, setActive2 }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <Shade>
      <FormContainer ref={ModalRef}>
        <FormHeader>Registration Details</FormHeader>
        <FormGrid>
          <div>
            <h1>Name :</h1>
            <h2>{patient.name}</h2>
          </div>
          <div>
            <h1>Date of birth :</h1>
            <h2>Chinenye Matu</h2>
          </div>
          <div>
            <h1>Country :</h1>
            <h2>Chinenye Matu</h2>
          </div>
          <div>
            <h1>Phone Number :</h1>
            <h2>Chinenye Matu</h2>
          </div>
          <div>
            <h1>Email address :</h1>
            <h2>Chinenye Matu</h2>
          </div>
          <div>
            <h1>Languages :</h1>
            <h2>Chinenye Matu</h2>
          </div>
          <div>
            <h1>Specialty :</h1>
            <h2>Chinenye Matu</h2>
          </div>
        </FormGrid>
        <Button
          text="View Documents"
          fontSize="1.4rem"
          onClick={() => {
            setActive2(true);
            setActive(false);
          }}
        />
      </FormContainer>
    </Shade>
  );
};

const FormContainer = styled.div`
  height: 42rem;
  width: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 2rem;
`;

const FormGrid = styled.div`
  margin-left: 2rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 4rem;
  div {
    margin-bottom: 2.2rem;
    display: flex;
  }
  h1 {
    font-weight: 600;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  h2 {
    font-weight: 500;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    align-items: flex-start;
  }
`;

const FormHeader = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ConfirmModal = ({ setActive, choice, name }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <Shade>
      <ActionModalContainer ref={ModalRef}>
        <ImageContainer src={ApproveBadge} width={"100rem"} height={"100rem"} />
        <ActionMessage>{`Successfully ${choice.toLowerCase()} ${name}`}</ActionMessage>
      </ActionModalContainer>
    </Shade>
  );
};

const ActionModalContainer = styled.div`
  height: 20rem;
  width: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 2rem;
`;

const ActionMessage = styled.h1`
  margin: 0;
  padding: 0;
  width: 80%;
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 1rem;
  text-align: center;
`;
const ImageContainer = styled.img``;

export const DoctorDocuments = ({ setActive, images }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  const [tab, setTab] = useState(1);
  return (
    <Shade>
      <DocumentContainer ref={ModalRef}>
        <Header>Documents</Header>
        <DocumentTitle>
          {" "}
          {tab === 1 ? "Practising License" : "Regristration certificate"}
        </DocumentTitle>
        <DocumentImageContainer />
        <TabContainer>
          <TapCircle active={tab === 1} onClick={() => setTab(1)} />
          <TapCircle active={tab === 2} onClick={() => setTab(2)} />
        </TabContainer>
      </DocumentContainer>
    </Shade>
  );
};

const DocumentContainer = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
`;
const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  margin-top: 3rem;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const DocumentTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: rgba(85, 85, 85, 1);
`;
const DocumentImageContainer = styled.img`
  width: 70%;
  height: 65%;
  border: 0.06rem solid rgba(0, 0, 255, 0.6);
`;
const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-top: 2rem;
`;
const TapCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "blue" : "rgba(217, 217, 217, 1)"};
`;
