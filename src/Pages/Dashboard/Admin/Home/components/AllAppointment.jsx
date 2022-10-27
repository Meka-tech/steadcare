import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useFetch from "../../../../../hooks/useFetch";

export const AllAppointment = () => {
  const token = useSelector((state) => state.reducer.adminDetails.token);
  const [appointmentArray, setAppointmentArray] = useState([]);
  const SetAppointments = (response) => {
    setAppointmentArray(response.data.data);
  };
  useFetch(token, "/admin/dashboard-appoinments", SetAppointments);
  return (
    <Container>
      <Title>All Appointments</Title>
      <Body>
        <Header>
          <h1>DOCTOR</h1>
          <h1>PATIENT</h1>
          <h1>DATE</h1>
          <h1>REF</h1>
          <h1>STATUS</h1>
        </Header>
        {appointmentArray.map((col, index) => (
          <Column key={index}>
            <h1>{col.name}</h1>
            <h1>Luther Ope</h1>
            <h1>Sept 18, 10:00</h1>
            <h1>9230T3F</h1>
            <Status status={`${col.status}`}>
              <div>{col.status}</div>
            </Status>
          </Column>
        ))}
        {appointmentArray.length === 0 && (
          <Empty>
            <h1>Appointments will appear here when booked.</h1>
          </Empty>
        )}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;
const Title = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;
const Body = styled.div`
  width: 100%;
  border: 0.5px solid rgba(85, 85, 85, 1);
  min-height: 10rem;
  background: white;
  border-radius: 5px;
  border-bottom: none;
`;

const Header = styled.div`
  box-sizing: border-box;
  padding: 0 2rem;
  display: grid;
  height: 5rem;
  border-bottom: 1px solid rgba(85, 85, 85, 1);
  grid-template-columns: 22rem 22rem 20rem 17rem 17rem;
  align-items: center;
  h1 {
    color: rgba(85, 85, 85, 1);
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 0 2rem;
  display: grid;
  height: 5rem;
  border-bottom: 1px solid rgba(85, 85, 85, 1);
  grid-template-columns: 22rem 22rem 20rem 17rem 17rem;
  align-items: center;
  h1 {
    color: black;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;
const Status = styled.div`
  font-size: 1.4rem;
  div {
    width: 10rem;
    padding: 0.4rem 0;
    border-radius: 0.5rem;
    background-color: ${(props) =>
      props.status === "ongoing"
        ? "rgba(0, 0, 255, 0.2)"
        : props.status === "completed"
        ? "rgba(27, 189, 1, 0.25)"
        : props.status === "postponed"
        ? "rgba(153, 156, 8, 0.25)"
        : props.status === "canceled"
        ? "rgba(255, 0, 0, 0.25)"
        : props.status === "due"
        ? "rgba(255, 77, 0, 0.25)"
        : null};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) =>
      props.status === "ongoing"
        ? "rgba(0, 0, 255, 1)"
        : props.status === "completed"
        ? "rgba(27, 189, 1, 1)"
        : props.status === "postponed"
        ? "rgba(153, 156, 8, 1)"
        : props.status === "canceled"
        ? "rgba(255, 0, 0, 1)"
        : props.status === "due"
        ? "rgba(255, 77, 0, 1)"
        : null};
  }
`;
const Empty = styled.div`
  height: 40rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(85, 85, 85, 1);
  h1 {
    font-weight: 500;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }
`;
