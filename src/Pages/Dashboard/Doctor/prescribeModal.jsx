import { useRef } from "react";
import styled from "styled-components";
import { Button, TextForm } from "../../../Components";
import useClickOutside from "../../../hooks/useClickOutside";

export const PrescribeModal = ({ setActive }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <ModalContainer ref={ModalRef}>
        <Header>Prescribe medication</Header>
        <TextForm title={"Doctor"} />
        <TextForm title={"Medicine"} />
        <TextForm title={"Dosage"} />
        <TextForm title={"Duration"} />
        <Button text="Submit" fontSize="1.4rem" />
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
