import { useRef } from "react";
import styled from "styled-components";
import useClickOutside from "../../../hooks/useClickOutside";
import { mobile } from "../../../Utilities/responsive";

export const FormModal = ({ setActive, patient }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <FormContainer ref={ModalRef}>
        <FormDisplayPic img={patient.patient.avatar.url} />
        <FormHeader>{patient.name}</FormHeader>
        <FormSubHeader>Patient Form</FormSubHeader>
        <FormGrid>
          <div>
            <h1>Name :</h1>
            <h2>{patient.name}</h2>
          </div>
          <div>
            <h1>Age :</h1>
            <h2>{patient.age}</h2>
          </div>
          <div>
            <h1>Sex :</h1>
            <h2>{patient.gender}</h2>
          </div>
          <div>
            <h1>Occupation :</h1>
            <h2>{patient.occupation}</h2>
          </div>
          <div>
            <h1>Religion :</h1>
            <h2>{patient.religion}</h2>
          </div>
          <div>
            <h1>Address :</h1>
            <h2>{patient.address}</h2>
          </div>
          <div>
            <h1>Marital Status :</h1>
            <h2>{patient.maritalStatus}</h2>
          </div>
          <div>
            <h1>Tribe :</h1>
            <h2>{patient.tribe}</h2>
          </div>
          <div>
            <h1>Complaint & Duration :</h1>
            <h2>{patient.complaint}</h2>
          </div>
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
  flex-direction: column;
`;
const FormContainer = styled.div`
  height: 43rem;
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

  div {
    margin-bottom: 1.5rem;
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
  }
`;

const FormDisplayPic = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 255, 1);
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
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
