import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Button } from "../../../../../Components";
import useClickOutside from "../../../../../hooks/useClickOutside";

export const DeleteModal = ({ setActive, data }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <ModalContainer ref={ModalRef}>
        <Message>
          Are you sure you want to delete Dr Chinenye Adaeze’s Medical
          prescription?
        </Message>
        <ModalButton>
          <Button
            height={"2.5rem"}
            width={"5rem"}
            text="Yes"
            fontSize="1.4rem"
          />
          <Button
            width={"5rem"}
            bgColor="red"
            text="No"
            fontSize="1.4rem"
            height={"2.5rem"}
          />
        </ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export const ImageModal = ({ setActive, data }) => {
  const ModalRef = useRef();
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <ModalBackground>
      <ModalImage ref={ModalRef} />
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
  width: 35rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 1rem;
`;

const Message = styled.h1`
  margin: 0;
  padding: 0;
  width: 70%;
  line-height: 2rem;
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 1rem;
  text-align: center;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  width: 70%;
`;

const ModalImage = styled.img`
  height: 45rem;
  width: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  padding: 1rem;
`;
