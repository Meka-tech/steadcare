import axios from "axios";
import { useFormik } from "formik";
import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button, TextForm } from "../../../Components";
import useClickOutside from "../../../hooks/useClickOutside";
import { BaseUrl } from "../../../Utilities";

export const PrescribeModal = ({ setActive, patientId }) => {
  const token = useSelector((state) => state.reducer.doctorDetails.token);

  const PrescribeApi = async () => {
    const data = {
      doctor: `${values.doctor}`,
      medicine: `${values.medicine}`,
      dosage: `${values.dosage}`,
      duration: `${values.duration}`
    };

    const config = {
      method: "post",
      url: `${BaseUrl}/create-prescriptions/62e7ff4123e152264efb292b`,
      headers: { Authorization: "Bearer " + token },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      doctor: "",
      medicine: "",
      dosage: "",
      duration: ""
    },
    onSubmit: PrescribeApi
  });

  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <ModalContainer ref={ModalRef}>
        <Header>Prescribe medication</Header>
        <TextForm
          title={"Doctor"}
          inputValue={values.doctor}
          onChange={handleChange("doctor")}
        />
        <TextForm
          title={"Medicine"}
          inputValue={values.medicine}
          onChange={handleChange("medicine")}
        />
        <TextForm
          title={"Dosage"}
          inputValue={values.dosage}
          onChange={handleChange("dosage")}
        />
        <TextForm
          title={"Duration"}
          inputValue={values.duration}
          onChange={handleChange("duration")}
        />
        <Button
          text="Submit"
          fontSize="1.4rem"
          onClick={handleSubmit}
          type="submit"
        />
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

const Header = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ModalContainer = styled.div`
  height: 50rem;
  width: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 2rem 4rem;
  box-sizing: border-box;
`;
