import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import { BaseUrl } from "../../../../Utilities";
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

export const AppointmentList = ({ data, loading, token }) => {
  const [activeTab, setActiveTab] = useState("UA");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const [appointmentId, setAppointmentId] = useState();
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

  const RescheduleAppointment = async () => {
    const data = { time: "2022-09-15T12:59:12.918Z" };

    const config = {
      method: "patch",
      url: `${BaseUrl}/rescheduled-doctors-appointment/${appointmentId}`,
      headers: { Authorization: "Bearer " + token },
      data: data
    };

    axios(config)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const ClearAppointment = () => {
    const config = {
      method: "delete",
      url: `${BaseUrl}/clear-appointment/${appointmentId}`,
      headers: { Authorization: "Bearer " + token }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Dropdown = ({ appointment }) => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        {appointment === "Upcoming" ? (
          <DropdownItem onClick={() => RescheduleAppointment()}>
            Re-schedule
          </DropdownItem>
        ) : (
          <DropdownItem>Book Doctor</DropdownItem>
        )}
        {appointment === "Upcoming" ? (
          <DropdownItem onClick={() => setActiveDropDown(false)}>
            Cancel
          </DropdownItem>
        ) : (
          <DropdownItem
            onClick={() => {
              setActiveDropDown(false);
              ClearAppointment();
            }}
          >
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
                    <h4>{datum[2]}</h4>
                    <StatusDiv>
                      <Status status={`${datum.status}`}>{datum.status}</Status>
                      <ThreeDots
                        onClick={() => {
                          setActiveDropDown(!activeDropDown);
                          setClickedColumn(index);
                          setAppointmentId(datum._id);
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
                  <h4>{datum[2]}</h4>
                  <StatusDiv>
                    <Status status={`${datum.status}`}>{datum.status}</Status>
                    <ThreeDots
                      onClick={() => {
                        setActiveDropDown(!activeDropDown);
                        setClickedColumn(index);
                        setAppointmentId(datum._id);
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
