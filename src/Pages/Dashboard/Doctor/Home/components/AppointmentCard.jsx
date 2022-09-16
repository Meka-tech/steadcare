import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

export const AppointmentRequests = ({}) => {
  const [hasAppointment, setHasAppointment] = useState(true);
  return (
    <AppointmentContainer>
      <AppointmentDiv>
        {hasAppointment ? (
          <div>
            <AppointmentItem name="Chineye Matu" time={"21 July, 10 am"} />
            <AppointmentItem name="Chineye Matu" time={"21 July, 10 am"} />
            <AppointmentItem name="Chineye Matu" time={"21 July, 10 am"} />
          </div>
        ) : (
          <NoAppointmentDiv>
            <NoAppointment>
              Appointment requests will appear here when you’re booked.
            </NoAppointment>
          </NoAppointmentDiv>
        )}
      </AppointmentDiv>
    </AppointmentContainer>
  );
};

const AppointmentContainer = styled.div`
  width: 100%;
`;

const AppointmentDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid rgba(85, 85, 85, 1);
  position: relative;
  padding: 4rem 2rem;
  box-sizing: border-box;
`;
const NoAppointmentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const NoAppointment = styled.h1`
  text-align: center;
  right: 0;
  left: 0;
  font-weight: 500;
  font-size: 1.4rem;
`;

const AppointmentItem = ({ name, time, img }) => {
  return (
    <AppointmentItemContainer>
      <PictureProfile>
        <DisplayPicture />
        <NameDiv>
          <Name>{name}</Name>
          <Time>{time}</Time>
        </NameDiv>
      </PictureProfile>
      <ViewForm>view form</ViewForm>
      <Buttons>
        <AiOutlineCheckCircle
          color="green"
          size={20}
          style={{ cursor: "pointer" }}
        />
        <MdOutlineCancel
          color="F60F0F"
          size={20}
          style={{ cursor: "pointer" }}
        />
      </Buttons>
    </AppointmentItemContainer>
  );
};

const AppointmentItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const PictureProfile = styled.div`
  align-items: center;
  display: flex;
`;
const DisplayPicture = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background: gray;
  margin-right: 2rem;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  color: black;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Time = styled.h2`
  text-align: left;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  font-size: 1.2rem;
`;

const ViewForm = styled.h2`
  cursor: pointer;
  color: blue;
  font-weight: 400;
  font-size: 1.3rem;
`;
const Buttons = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
