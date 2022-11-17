import React from "react";
import styled from "styled-components";
import { Button, DashboardNavbar } from "../../../../Components";
import { mobile } from "../../../../Utilities/responsive";
import { Calendar } from "react-calendar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { BaseUrl } from "../../../../Utilities";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Body, Container } from "../../style";
import { useLocation, useNavigate } from "react-router";

export const RescheduelAppointment = () => {
  const token = useSelector((state) => state.reducer.patientDetails.token);
  const [date, onChangeDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("8:00");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const MorningTimeSlots = ["8:00", "9:00", "10:00", "11:00"];
  const AfternoonTimeSlots = ["12:00", "13:00", "14:00", "15:00", "16:00"];

  const { state } = useLocation();

  const OnRescheduelAppointment = async () => {
    setLoading(true);
    const data = {
      time: `${moment(date.toDateString() + " " + selectedTime)._d}`
    };

    const config = {
      method: "patch",
      url: `${BaseUrl}/rescheduled-doctors-appointment/${state}`,
      headers: { Authorization: "Bearer " + token },
      data: data
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/patient/appointments");
        }, 1500);
      })
      .catch(function (error) {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };
  return (
    <Container>
      <DashboardNavbar role="patient" active="Appointments" />
      <Body>
        <DateAndTime>
          <CalendarDiv>
            <Calendar onChange={onChangeDate} value={date} />
          </CalendarDiv>
          <TimeDiv>
            <h1>Morning</h1>
            <TimeNumber>
              {MorningTimeSlots.map((time, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedTime(time)}
                    style={{
                      backgroundColor:
                        time === selectedTime ? "rgba(0, 0, 255, 0.5)" : ""
                    }}
                  >
                    <h2>{time} am</h2>
                  </div>
                );
              })}
            </TimeNumber>
          </TimeDiv>
          <TimeDiv>
            <h1>Afternoon</h1>
            <TimeNumber>
              {AfternoonTimeSlots.map((time, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedTime(time)}
                    style={{
                      backgroundColor:
                        time === selectedTime ? "rgba(0, 0, 255, 0.5)" : ""
                    }}
                  >
                    <h2>{time} pm</h2>
                  </div>
                );
              })}
            </TimeNumber>
          </TimeDiv>
        </DateAndTime>
        <DateAndTimeButton>
          <Button
            text="Rescheduel"
            onClick={() => {
              OnRescheduelAppointment();
            }}
            isLoading={loading}
          />
          <ToastContainer />
        </DateAndTimeButton>
        <DateAndTimeFooter>
          Time slots are in (GMT +1) West Africa Time.
        </DateAndTimeFooter>
      </Body>
    </Container>
  );
};

const DateAndTime = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(85, 85, 85, 1);
  border-radius: 0.5rem;
  margin-bottom: 4rem;
  background-color: white;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
`;
const DateAndTimeButton = styled.div`
  margin-bottom: 8rem;
`;
const DateAndTimeFooter = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const CalendarDiv = styled.div`
  width: 35rem;
  height: fit-content;
  box-sizing: border-box;
  ${mobile({
    margin: "1rem",
    width: "38rem"
  })}

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
  /* ~~~ container styles ~~~ */
  /* ... */

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    margin-bottom: 1rem;

    .react-calendar__navigation__label {
      font-weight: 500;
      font-size: 1.4rem;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      font-size: 1.5rem;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 1.2rem;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    ${mobile({
      fontSize: "1.4rem"
    })}
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    border: 0;
    border-radius: 0.3;
    color: black;
    padding: 0.8rem;
    font-size: 1rem;
    font-family: Montserrat;
    ${mobile({
      fontSize: "1.4rem"
    })}

    &:hover {
      /* background-color: rgba(0, 0, 255, 0.5); */
      color: white;
    }

    &:active {
      /* background-color: rgba(0, 0, 255, 0.5); */
      color: white;
    }
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.6;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #ff0000;
  }
  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
    /* background-color: rgba(0, 0, 255, 1); */
    color: white;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;

const TimeDiv = styled.div`
  width: 100%;
  margin-bottom: 3em;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
  }
`;
const TimeNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    background-color: rgba(0, 0, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 3rem;
    margin-right: 4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    ${mobile({
      margin: "1rem",
      width: "8rem"
    })}
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    ${mobile({
      fontSize: "1.4rem"
    })}
  }
`;
