import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useFetch from "../../../../../hooks/useFetch";
import { BaseUrl } from "../../../../../Utilities";
import { Spinner } from "../../component";
import { FormModal } from "../../formModal";
import {
  ConfirmModal,
  DoctorDocuments,
  RegistrationModal,
  YesNoModal
} from "./Modal";

export const DoctorList = () => {
  const token = useSelector((state) => state.reducer.adminDetails.token);

  const [formActive, setFormActive] = useState(false);

  const [DocumentActive, setDocumentActive] = useState(false);

  const [doctorList, setDoctorList] = useState([]);

  const GetDoctorList = (response) => {
    setDoctorList(response.data.data.fetchedData);
  };
  const { loading } = useFetch(token, "/admin/list-of-dotors", GetDoctorList);
  return (
    <Container>
      {formActive && (
        <RegistrationModal
          setActive={setFormActive}
          patient={""}
          setActive2={setDocumentActive}
        />
      )}
      {DocumentActive && (
        <DoctorDocuments images={""} setActive={setDocumentActive} />
      )}
      <Nav>
        <Title>Doctors List</Title>
        {/* <NavLink>view disabled doctors</NavLink> */}
      </Nav>
      <Body>
        <Header>
          <h1>Name</h1>
          <h1>Status</h1>
          <h1>Action</h1>
        </Header>
        {doctorList?.map((doctor, index) => (
          <Column key={index}>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => setFormActive(true)}
            >
              Dr {doctor.name}
            </h1>
            <h1>{doctor.status}</h1>
            <Actions name={doctor.name} id={doctor._id} />
          </Column>
        ))}

        {doctorList === 0 && (
          <Empty>
            <h1>Doctors list will appear here when they register.</h1>
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
const NavLink = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  color: blue;
  cursor: pointer;
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
  grid-template-columns: 30rem 22rem 40rem;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 255, 0.07);
  }
  h1 {
    color: black;
    font-weight: 500;
    font-size: 1.4rem;
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

  const VerifyOrDecline = () => {
    const data = { status: choice };

    const config = {
      method: "patch",
      url: `${BaseUrl}/admin/update-doctors-status/${id}`,
      headers: {
        Authorization: "Bearer " + token
      },
      data: data
    };

    axios(config)
      .then(function (res) {
        console.log(res);
      })
      .catch(function () {});
  };
  const Action = () => {
    setConfirmModalActive(true);
    setActive(false);
    VerifyOrDecline();
  };

  const token = useSelector((state) => state.reducer.adminDetails.token);

  const [DoctorDetails, setDoctorDetails] = useState();

  const setDoctor = (response) => {
    setDoctorDetails(response.data.data);
  };

  useFetch(token, `/admin/view-a-doctor/${id}`, setDoctor);

  return (
    <>
      {active && (
        <YesNoModal
          text={`Are you sure you want Doctor ${name} to be ${choice} ?`}
          setActive={setActive}
          action={Action}
        />
      )}
      {formActive && (
        <FormModal setActive={setFormActive} patient={DoctorDetails} />
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
          color="rgba(27, 191, 0, 1)"
          onClick={() => {
            setActive(true);
            setChoice("enabled");
          }}
        >
          Approve
        </Button>
        <Button
          onClick={() => {
            setActive(true);
            setChoice("disabled");
          }}
          color="red"
        >
          Disable
        </Button>
        <Button
          color="blue"
          onClick={() => {
            setFormActive(true);
          }}
        >
          View
        </Button>
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
`;