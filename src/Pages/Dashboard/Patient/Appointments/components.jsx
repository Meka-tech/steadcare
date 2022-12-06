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
import moment from "moment";
import { useNavigate } from "react-router";
import { usePaystackPayment } from "react-paystack";

export const AppointmentList = ({ data, loading, token }) => {
  const [activeTab, setActiveTab] = useState("UA");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const [appointmentId, setAppointmentId] = useState();
  const navigate = useNavigate();
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

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
  /////////////////Payment/////////////
  ///////////////////////////////////////
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: "pk_test_c2a36e4b6e9e816374002ab3d2de4d26db12fd38",
    metadata: {
      doctorId: "77w6w8243455",
      appointmentId,
      patientId: "77w6w8243455"
    }
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Paystack Hooks Implementation
        </button>
      </div>
    );
  };
  ///////////////////////////////////////////
  //////////////////////////////////////////

  const Dropdown = ({ appointment }) => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        {appointment === "Upcoming" ? (
          <DropdownItem
            onClick={() => {
              navigate("/patient/rescheduel-appointment", {
                state: appointmentId
              });
            }}
          >
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
            const m = moment(datum.time);
            if (activeTab === "PA") {
              if (datum.status === "completed") {
                return (
                  <Column key={index + Math.round(2)}>
                    <NameDiv>
                      <DisplayPicture img={datum.doctor.avatar.url} />{" "}
                      <h4>{datum.name}</h4>
                    </NameDiv>
                    <h4>{m.format("L")}</h4>
                    <h4>{m.format("h:mma")}</h4>
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
              const m = moment(datum.time);
              return (
                <Column key={index + Math.round(2)}>
                  <NameDiv>
                    <DisplayPicture img={datum.doctor.avatar.url} />{" "}
                    <h4>{datum.name}</h4>
                  </NameDiv>
                  <h4>{m.format("L")}</h4>
                  <h4>{m.format("h:mma")}</h4>
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
