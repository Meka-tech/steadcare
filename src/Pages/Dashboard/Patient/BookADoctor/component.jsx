import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../../../Images/RatingStar.svg";
import { ReactComponent as LocationIcon } from "../../../../Images/locationIcon.svg";
import { Button } from "../../../../Components";
import { useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import { useRef } from "react";

export const DoctorCardItem = ({
  name,
  specialty,
  location,
  book,
  rating,
  setActive,
  setIndex,
  index,
  setDoctorId,
  doctorId
}) => {
  return (
    <DoctorCard>
      <CardHeader>
        <div>
          <DisplayPic />
          <NameDiv>
            <h1>{name}</h1>
            <h2>{specialty}</h2>
          </NameDiv>
        </div>
        <Rating>
          <RatingStar />
          <h4>{rating}.0</h4>
        </Rating>
      </CardHeader>
      <MiddleSection>
        <div>
          <LocationIcon />
          <h2>Lagos,Nigeria</h2>
        </div>
        <h1>N 5,000</h1>
      </MiddleSection>
      <TextSection>
        I’m a consultant with 27 years experience who is also pationate about my
        patients.
      </TextSection>
      <ButtonSection>
        <Button
          onClick={() => {
            setActive(true);
            setIndex(index);
            setDoctorId(doctorId);
          }}
          bgColor={"white"}
          color="rgba(0, 0, 255, 1)"
          border={" 1px solid rgba(0, 0, 255, 1)"}
          text="View Profile"
          fontSize="1.2rem"
        />
        <Button
          text="Book Doctor"
          fontSize="1.2rem"
          onClick={() => {
            setIndex(index);
            setDoctorId(doctorId);
            book();
          }}
        />
      </ButtonSection>
    </DoctorCard>
  );
};

export const ViewProfile = ({
  setActive,
  name,
  rating,
  specialty,
  book,
  language,
  location,
  patient
}) => {
  const ModalRef = useRef(null);
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ViewProfileDiv>
      <ModalContainer ref={ModalRef}>
        <ModalDP />
        <ModalNameText> dr {name}</ModalNameText>
        <Role>Consultant</Role>
        <Rating>
          <RatingStar />
          <h4>{rating}.0</h4>
        </Rating>
        <ModalDetails>
          <ModalDetail>
            <ModalDetailHeader>Specialty:</ModalDetailHeader>
            <ModalDetailContent>{specialty}</ModalDetailContent>
          </ModalDetail>
          <ModalDetail>
            <ModalDetailHeader>Language:</ModalDetailHeader>
            <ModalDetailContent>{}</ModalDetailContent>
          </ModalDetail>
          <ModalDetail>
            <ModalDetailHeader>Steadcare Patients:</ModalDetailHeader>
            <ModalDetailContent>{}</ModalDetailContent>
          </ModalDetail>
          <ModalDetail>
            <ModalDetailHeader>Location:</ModalDetailHeader>
            <ModalDetailContent>{}</ModalDetailContent>
          </ModalDetail>
        </ModalDetails>
        <Button
          text="Book"
          onClick={() => {
            book();
            setActive(false);
          }}
        />
      </ModalContainer>
    </ViewProfileDiv>
  );
};

const DoctorCard = styled.div`
  height: 18rem;
  width: 35rem;
  border-radius: 0.5rem;
  background-color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 255, 0.3);
  margin-bottom: 3rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  div {
    display: flex;
  }
`;
const DisplayPic = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background-color: gray;
  margin-right: 1rem;
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;
const Rating = styled.div`
  background-color: rgba(255, 183, 43, 0.2);
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  h4 {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    margin-left: 0.5rem;
  }
`;
const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    margin: 0;
    padding: 0;
    color: rgba(85, 85, 85, 1);
    font-size: 1.4rem;
    font-weight: 500;
  }
  h2 {
    margin: 0;
    padding: 0;
    color: rgba(85, 85, 85, 1);
    font-size: 1rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`;
const TextSection = styled.div`
  width: 100%;
  height: 4rem;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
`;

const ViewProfileDiv = styled.div`
  position: fixed;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  top: 0;
  right: 0;
  z-index: 100;
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  height: fit-content;
  width: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 0.6);
  padding: 2rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;
const ModalDP = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: #e7e7e7;
  border: 1px solid rgba(0, 0, 255, 0.5);
`;

const ModalNameText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.8rem;
  text-align: center;
  text-transform: capitalize;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
const Role = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;
const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 4rem;
  height: fit-content;
  margin-bottom: 3rem;
`;
const ModalDetail = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: fit-content;
  margin-bottom: 3rem;
`;

const ModalDetailHeader = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin: auto 0;
`;

const ModalDetailContent = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  font-weight: 500;
  margin: auto 0;
  margin-left: 1rem;
  text-transform: capitalize;
`;
