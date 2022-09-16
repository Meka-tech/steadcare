import { useRef } from "react";
import { useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import { Spinner } from "../component";
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

export const AppointmentList = ({ data, loading }) => {
  const [activeTab, setActiveTab] = useState("UA");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

  const Dropdown = ({ appointment }) => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        {appointment === "Upcoming" ? (
          <div>
            <DropdownItem>View form</DropdownItem>
            <DropdownItem>Request history</DropdownItem>
            <DropdownItem>Accept</DropdownItem>
            <DropdownItem>Cancel</DropdownItem>
          </div>
        ) : null}
        {appointment !== "Upcoming" ? (
          <div>
            <DropdownItem>Prescribe</DropdownItem>
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
              if (datum[3] === "Completed") {
                return (
                  <Column key={index + datum[0]}>
                    <NameDiv>
                      <DisplayPicture /> <h4>{datum[0]}</h4>
                    </NameDiv>
                    <h4>{datum[1]}</h4>
                    <h4>{datum[2]}</h4>
                    <StatusDiv>
                      <Status status={`${datum[3]}`}>{datum[3]}</Status>
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
                <Column key={index + datum[0]}>
                  <NameDiv>
                    <DisplayPicture /> <h4>{datum[0]}</h4>
                  </NameDiv>
                  <h4>{datum[1]}</h4>
                  <h4>{datum[2]}</h4>
                  <StatusDiv>
                    <Status status={`${datum[3]}`}>{datum[3]}</Status>
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
