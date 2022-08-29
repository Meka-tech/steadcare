import { useRef } from "react";
import { useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
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
  TabContainer,
  TabHeader,
  ThreeDots
} from "./style";

export const AppointmentList = ({ data }) => {
  const [activeTab, setActiveTab] = useState("UA");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

  const Dropdown = ({ appointment }) => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        {appointment === "Upcoming" ? (
          <DropdownItem>Re-Scheduel</DropdownItem>
        ) : (
          <DropdownItem>Book Doctor</DropdownItem>
        )}
        {appointment === "Upcoming" ? (
          <DropdownItem onClick={() => setActiveDropDown(false)}>
            Cancel
          </DropdownItem>
        ) : (
          <DropdownItem onClick={() => setActiveDropDown(false)}>
            Clear
          </DropdownItem>
        )}
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
        {data.map((datum, index) => {
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
                      <Dropdown appointment={"Upcoming"} />
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
      </TabBody>
    </AppointmentListContainer>
  );
};