import { useRef } from "react";
import styled from "styled-components";
import useClickOutside from "../../../hooks/useClickOutside";
import moment from "moment";
import { mobile } from "../../../Utilities/responsive";

export const FormModal = ({ setActive, patient, func }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <FormContainer ref={ModalRef}>
        <FormDisplayPic />
        <FormGrid>
          <div>
            <h1>Name :</h1>
            <h2>{patient?.name}</h2>
          </div>
          <div>
            <h1>Date of birth :</h1>
            <h2>{moment(patient?.dob).format("L")}</h2>
          </div>
          <div>
            <h1>Country :</h1>
            <h2>{patient?.country}</h2>
          </div>
          <div>
            <h1>Phone Number :</h1>
            <h2>{patient?.phone}</h2>
          </div>
          <div>
            <h1>Email address :</h1>
            <h2>{patient?.email}</h2>
          </div>

          {patient.languages && (
            <div>
              <h1>Languages :</h1>
              <h2>
                {patient?.languages?.map((lan) => {
                  return lan;
                })}
              </h2>{" "}
            </div>
          )}
          {patient.specialty && (
            <div>
              <h1>Specialty :</h1>
              <h2>{patient?.specialty}</h2>
            </div>
          )}
        </FormGrid>
      </FormContainer>
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
  ${mobile({ width: "100%" })}
`;
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
  margin-top: 2rem;

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
    text-transform: capitalize;
  }
`;

const FormDisplayPic = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 255, 1);
`;
const FormHeader = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;
const FormSubHeader = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.2rem;
  color: rgba(85, 85, 85, 0.9);
  margin-bottom: 2rem;
`;
