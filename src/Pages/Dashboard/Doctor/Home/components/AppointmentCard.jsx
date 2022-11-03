import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import useClickOutside from "../../../../../hooks/useClickOutside";
import ApproveBadge from "../../../../../Images/approveBadge.png";
import CancelMark from "../../../../../Images/cancel_mark.png";
import { FormModal } from "../../formModal";
import axios from "axios";
import { BaseUrl } from "../../../../../Utilities";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useFetch from "../../../../../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { Spinner } from "../../component";

export const AppointmentRequests = ({}) => {
  const [hasAppointment, setHasAppointment] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [requestStatus, setRequestStatus] = useState("");
  const [viewForm, setViewForm] = useState(false);
  const [focusPatient, setFocusPatient] = useState();
  const token = useSelector((state) => state.reducer.doctorDetails.token);
  const [appointmentData, setAppointmentData] = useState([]);

  const SetData = async (response) => {
    setAppointmentData(response.data.data.fetchedData);
  };
  useFetch(token, "/get-my-appoinments?pageNo=1&noOfRequests=3", SetData);

  useEffect(() => {
    if (appointmentData.length > 0) {
      setHasAppointment(true);
    }
  }, [appointmentData]);

  const AcceptRejectAppointment = async (status, ID) => {
    const data = { status };

    const config = {
      method: "patch",
      url: `${BaseUrl}/approve-reject-appoinments/${ID}`,
      headers: { Authorization: "Bearer " + token },
      data: data
    };

    axios(config)
      .then(function (response) {
        toast.success(response.data.message);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };

  const AppointmentItem = ({ name, time, img, action, index, id }) => {
    const m = moment(time);
    return (
      <AppointmentItemContainer>
        <PictureProfile>
          <DisplayPicture />
          <NameDiv>
            <Name>{name}</Name>
            <Time>
              {m.format("LL")} ,{m.format("h:mma")}
            </Time>
          </NameDiv>
        </PictureProfile>
        <ViewForm
          onClick={() => {
            setViewForm(true);
            setFocusPatient(index);
          }}
        >
          view form
        </ViewForm>
        <Buttons>
          <AiOutlineCheckCircle
            color="green"
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => {
              action("accept");
              setRequestModal(true);
              setFocusPatient(index);
              AcceptRejectAppointment("accepted", id);
            }}
          />
          <MdOutlineCancel
            color="F60F0F"
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => {
              action("decline");
              setRequestModal(true);
              setFocusPatient(index);
              AcceptRejectAppointment("rejected", id);
            }}
          />
          <ToastContainer />
        </Buttons>
      </AppointmentItemContainer>
    );
  };

  ///////////////////////////////
  return (
    <AppointmentContainer>
      {requestModal && (
        <RequestModal setActive={setRequestModal} status={requestStatus} />
      )}
      {viewForm && (
        <FormModal
          setActive={setViewForm}
          patient={appointmentData[focusPatient]}
        />
      )}
      <AppointmentDiv>
        {hasAppointment ? (
          <div>
            {appointmentData.map((appointment, index) => {
              return (
                <AppointmentItem
                  key={index}
                  name={appointment.name}
                  time={appointment.time}
                  action={setRequestStatus}
                  index={index}
                  id={appointment._id}
                />
              );
            })}
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

const AppointmentItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 22rem 10rem 10rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-evenly;
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
const RequestModal = ({ setActive, status }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <ModalContainer ref={ModalRef}>
        <ImageContainer
          src={status === "accept" ? ApproveBadge : CancelMark}
          width={"100rem"}
          height={"100rem"}
        />
        <Message>
          {status === "accept" && "Successfully accepted patient appointment."}
          {status === "decline" && "Patient appointment declined."}
        </Message>
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
  width: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 2rem;
`;

const Message = styled.h1`
  margin: 0;
  padding: 0;
  width: 80%;
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 1rem;
  text-align: center;
`;
const ImageContainer = styled.img``;
