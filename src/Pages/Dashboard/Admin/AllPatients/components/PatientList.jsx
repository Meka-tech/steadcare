import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useFetch from "../../../../../hooks/useFetch";
import { BaseUrl } from "../../../../../Utilities";
import { Spinner } from "../../component";
import { FormModal } from "../../formModal";
import { ConfirmModal, RegistrationModal, YesNoModal } from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mobile } from "../../../../../Utilities/responsive";

export const PatientList = () => {
  const token = useSelector((state) => state.reducer.adminDetails.token);
  const [formActive, setFormActive] = useState(false);

  const [allPatients, setAllPatients] = useState([]);

  const setPatients = (response) => {
    setAllPatients(response.data.data.fetchedData);
  };
  const { loading } = useFetch(token, "/admin/fetch-all-patients", setPatients);

  return (
    <Container>
      {formActive && (
        <RegistrationModal setActive={setFormActive} patient={""} />
      )}
      <Nav>
        <Title>All Patients</Title>
      </Nav>
      <Body>
        <Header>
          <h1>Name</h1>
          <h1>Status</h1>
          <h1>Action</h1>
        </Header>
        {allPatients.map((col, index) => (
          <Column key={index}>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => setFormActive(true)}
            >
              {col.name}
            </h1>
            <h1>Active</h1>
            <Actions name={col.name} id={col._id} />
          </Column>
        ))}

        {allPatients.length === 0 && (
          <Empty>
            <h1>Patient list will appear here when they register.</h1>
          </Empty>
        )}
        {loading && (
          <Empty>
            <Spinner />
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
  margin-top: 5rem;
  ${mobile({ marginBottom: "10rem", width: "95%" })}
`;
const Title = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 2rem;
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  grid-template-columns: 30rem 22rem 40rem;
  align-items: center;
  ${mobile({
    gridTemplateColumns: "13rem 8rem 25rem",
    padding: "0 1rem"
  })}
  h1 {
    color: rgba(85, 85, 85, 1);
    font-weight: 500;
    font-size: 1.6rem;
    ${mobile({ fontSize: "1.4rem" })}
  }
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 0 2rem;
  display: grid;
  height: 5rem;
  border-bottom: 1px solid rgba(85, 85, 85, 1);
  grid-template-columns: 30rem 22rem 40rem;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 255, 0.07);
  }
  ${mobile({
    gridTemplateColumns: "13rem 8rem 25rem",
    padding: "0 1rem"
  })}
  h1 {
    color: black;
    font-weight: 500;
    font-size: 1.4rem;
    ${mobile({ fontSize: "1.2rem" })}
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

const Actions = ({ name, id }) => {
  const [active, setActive] = useState(false);
  const [choice, setChoice] = useState("");
  const [formActive, setFormActive] = useState(false);
  const [confirmModalActive, setConfirmModalActive] = useState(false);
  const [clickedID, setClickedId] = useState();

  const Action = () => {
    setConfirmModalActive(true);
    setActive(false);
    if (choice === "Delete") {
      DeletePatient();
    }
  };

  const token = useSelector((state) => state.reducer.adminDetails.token);

  const [clickedPatient, setClickedPatient] = useState();

  const GetPatient = (response) => {
    setClickedPatient(response.data.data);
  };
  const ViewForm = async () => {
    setClickedId(id);
    if (clickedID !== undefined) {
      const config = {
        method: "get",
        url: `${BaseUrl}/admin/view-a-patient/${clickedID}`,
        headers: { Authorization: "Bearer " + token }
      };

      axios(config)
        .then(function (response) {
          GetPatient(response);
          if (clickedPatient !== undefined) {
            setFormActive(true);
          }
        })
        .catch(function () {});
    }
  };

  const DeletePatient = () => {
    const config = {
      method: "delete",
      url: `${BaseUrl}/admin/delete-a-patient/${clickedID}`,
      headers: {
        Authorization: "Bearer " + token
      }
    };

    axios(config)
      .then(function (res) {
        toast.success(res.data.message);
      })
      .catch(function (err) {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      {active && (
        <YesNoModal
          text={`Are you sure you want to ${choice} ${name}?`}
          setActive={setActive}
          action={Action}
        />
      )}
      {formActive && (
        <FormModal setActive={setFormActive} patient={clickedPatient} />
      )}

      {confirmModalActive && (
        <ConfirmModal
          setActive={setConfirmModalActive}
          choice={choice}
          name={name}
        />
      )}
      <ActionDiv>
        <Button
          color="rgba(119, 119, 119, 1)"
          onClick={() => {
            setActive(true);
            setChoice("Disable");
            setClickedId(id);
          }}
        >
          Disable
        </Button>
        <Button
          onClick={() => {
            setActive(true);
            setChoice("Delete");
            setClickedId(id);
          }}
          color="red"
        >
          Delete
        </Button>
        <Button color="blue" onClick={() => ViewForm()}>
          View
        </Button>
        <ToastContainer />
      </ActionDiv>
    </>
  );
};
const ActionDiv = styled.div`
  display: flex;
`;
const Button = styled.div`
  cursor: pointer;
  color: white;
  width: 8rem;
  box-sizing: border-box;
  padding: 0.5rem 0;
  background-color: ${(props) => props.color};
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  ${mobile({ fontSize: "1rem", width: "5rem" })}
`;
