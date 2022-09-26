import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../Components";
import useClickOutside from "../../../../hooks/useClickOutside";
import { Spinner } from "../component";
import { FormModal } from "../formModal";
import ApproveBadge from "../../../../Images/approveBadge.png";
import {
  AppointmentListContainer,
  Column,
  DisplayPicture,
  DropdownContainer,
  DropdownItem,
  NameDiv,
  Status,
  StatusDiv,
  Tab,
  TabBody,
  TabBodyText,
  TabContainer,
  TabHeader,
  ThreeDots
} from "./style";
import { PrescribeModal } from "../prescribeModal";

export const AppointmentList = ({ data, loading }) => {
  const [activeTab, setActiveTab] = useState("UA");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

  const [acceptCancelModal, setAcceptCancelModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const [formModal, setFormModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [prescribeModal, setPrescribeModal] = useState(false);

  const Dropdown = ({ appointment }) => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        {appointment === "Upcoming" ? (
          <div>
            <DropdownItem
              onClick={() => {
                setFormModal(true);
                setActiveDropDown(false);
              }}
            >
              View form
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setRequestModal(true);
                setActiveDropDown(false);
              }}
            >
              Request history
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setAcceptCancelModal(true);
                setModalStatus("accept");
                setActiveDropDown(false);
              }}
            >
              Accept
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setAcceptCancelModal(true);
                setModalStatus("cancel");
                setActiveDropDown(false);
              }}
            >
              Cancel
            </DropdownItem>
          </div>
        ) : null}
        {appointment !== "Upcoming" ? (
          <div>
            <DropdownItem
              onClick={() => {
                setPrescribeModal(true);
                setActiveDropDown(false);
              }}
            >
              Prescribe
            </DropdownItem>
            <DropdownItem onClick={() => setActiveDropDown(false)}>
              Clear
            </DropdownItem>
          </div>
        ) : null}
      </DropdownContainer>
    );
  };

  return (
    <AppointmentListContainer>
      {/* ////Modals */}
      {acceptCancelModal && (
        <AcceptCancelModal
          setActive={setAcceptCancelModal}
          status={modalStatus}
          data={data[clickedColumn]}
        />
      )}
      {formModal && (
        <FormModal setActive={setFormModal} patient={data[clickedColumn]} />
      )}
      {requestModal && <RequestModal setActive={setRequestModal} />}
      {prescribeModal && <PrescribeModal setActive={setPrescribeModal} />}
      {/* ///////////// */}
      <TabContainer>
        <Tab active={activeTab === "UA"} onClick={() => setActiveTab("UA")}>
          <h1>Upcoming Appointments </h1>
        </Tab>
        <Tab active={activeTab === "PA"} onClick={() => setActiveTab("PA")}>
          <h1>Past Appointments</h1>
        </Tab>
      </TabContainer>
      <TabHeader>
        <h2>Patient Name</h2>
        <h2>Date</h2>
        <h2>Time</h2>
        <h2>Status</h2>
      </TabHeader>
      <TabBody>
        {loading && <Spinner />}
        {loading === false &&
          data?.map((datum, index) => {
            if (activeTab === "PA") {
              if (datum.status === "completed") {
                return (
                  <Column key={index + Math.round(2)}>
                    <NameDiv>
                      <DisplayPicture /> <h4>{datum.name}</h4>
                    </NameDiv>
                    <h4>{datum.time}</h4>
                    <h4>{datum.time}</h4>
                    <StatusDiv>
                      <Status status={`${datum.status}`}>{datum.status}</Status>
                      <ThreeDots
                        onClick={() => {
                          setActiveDropDown(!activeDropDown);
                          setClickedColumn(index);
                        }}
                      >
                        ...
                      </ThreeDots>
                      {activeDropDown && index === clickedColumn && (
                        <Dropdown appointment={"Past"} />
                      )}
                    </StatusDiv>
                  </Column>
                );
              }
              return null;
            } else {
              return (
                <Column key={index + Math.round(2)}>
                  <NameDiv>
                    <DisplayPicture /> <h4>{datum.name}</h4>
                  </NameDiv>
                  <h4>{datum.time}</h4>
                  <h4>{datum.time}</h4>
                  <StatusDiv>
                    <Status status={`${datum.status}`}>{datum.status}</Status>
                    <ThreeDots
                      onClick={() => {
                        setActiveDropDown(!activeDropDown);
                        setClickedColumn(index);
                      }}
                    >
                      ...
                    </ThreeDots>
                    {activeDropDown && index === clickedColumn && (
                      <Dropdown appointment={"Upcoming"} />
                    )}
                  </StatusDiv>
                </Column>
              );
            }
          })}
        {data?.length === 0 &&
          (activeTab === "PA" ? (
            <TabBodyText>Previous appointments will appear here.</TabBodyText>
          ) : (
            <TabBodyText>Scheduled appointments will appear here.</TabBodyText>
          ))}
      </TabBody>
    </AppointmentListContainer>
  );
};

const AcceptCancelModal = ({ setActive, status, data }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <ModalContainer ref={ModalRef}>
        <Message>
          Are you sure you want to {status === "accept" ? "accept" : "cancel"}{" "}
          an appointment request from {data[0]}?
        </Message>
        <ModalButton>
          <Button
            height={"2.5rem"}
            width={"5rem"}
            text="Yes"
            fontSize="1.4rem"
          />
          <Button
            width={"5rem"}
            bgColor="red"
            text="No"
            fontSize="1.4rem"
            height={"2.5rem"}
          />
        </ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
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

const ModalContainer = styled.div`
  height: 20rem;
  width: 35rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 1rem;
`;

const Message = styled.h1`
  margin: 0;
  padding: 0;
  width: 70%;
  line-height: 2rem;
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 1rem;
  text-align: center;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  width: 70%;
`;

const RequestModal = ({ setActive, status }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <RequestModalContainer ref={ModalRef}>
        <ImageContainer src={ApproveBadge} width={"100rem"} height={"100rem"} />
        <RequestMessage>
          Successfully requested for patient history. You’ll get access once the
          patient approves.
        </RequestMessage>
      </RequestModalContainer>
    </ModalBackground>
  );
};

const RequestModalContainer = styled.div`
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

const RequestMessage = styled.h1`
  margin: 0;
  padding: 0;
  width: 80%;
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 1rem;
  text-align: center;
`;
const ImageContainer = styled.img``;
