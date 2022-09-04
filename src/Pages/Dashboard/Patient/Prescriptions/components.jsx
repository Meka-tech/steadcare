import { useRef } from "react";
import { useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
import { Spinner } from "../component";
import {
  AppointmentListContainer,
  Column,
  DateDiv,
  DisplayPicture,
  DropdownContainer,
  DropdownItem,
  ModalContainer,
  ModalDetail,
  ModalDetailContent,
  ModalDetailHeader,
  ModalDetails,
  ModalDisplayPicture,
  ModalHeader,
  ModalNameText,
  NameDiv,
  PrescriptionListContainer,
  Shade,
  Status,
  StatusDiv,
  Tab,
  TabBody,
  TabBodyText,
  TabContainer,
  TabHeader,
  ThreeDots
} from "./style";

export const PrescriptionList = ({ data, loading }) => {
  const [activeTab, setActiveTab] = useState("UA");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

  const [modalActive, setModalActive] = useState(false);

  const Dropdown = () => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        <DropdownItem
          onClick={() => {
            setModalActive(true);
            setActiveDropDown(false);
          }}
        >
          View prescription
        </DropdownItem>

        <DropdownItem onClick={() => setActiveDropDown(false)}>
          Clear
        </DropdownItem>
      </DropdownContainer>
    );
  };

  const Modal = () => {
    return (
      <>
        {modalActive && (
          <Shade onClick={() => setModalActive(false)}>
            <ModalContainer>
              <ModalDisplayPicture />
              <ModalNameText>{data[clickedColumn][0]}</ModalNameText>
              <ModalHeader>Doctor’s Prescription</ModalHeader>
              <ModalDetails>
                <ModalDetail>
                  <ModalDetailHeader>Drug:</ModalDetailHeader>{" "}
                  <ModalDetailContent>
                    {data[clickedColumn][2]}
                  </ModalDetailContent>
                </ModalDetail>
                <ModalDetail>
                  <ModalDetailHeader>Duration:</ModalDetailHeader>{" "}
                  <ModalDetailContent>
                    {data[clickedColumn][1]}
                  </ModalDetailContent>
                </ModalDetail>
                <ModalDetail>
                  <ModalDetailHeader>Date:</ModalDetailHeader>{" "}
                  <ModalDetailContent>
                    {data[clickedColumn][1]}
                  </ModalDetailContent>
                </ModalDetail>
              </ModalDetails>
            </ModalContainer>
          </Shade>
        )}
      </>
    );
  };
  return (
    <PrescriptionListContainer>
      <Modal />
      <TabHeader>
        <h2>Doctor</h2>
        <h2>Prescription</h2>
        <h2>Date</h2>
      </TabHeader>
      <TabBody>
        {loading && <Spinner />}
        {data?.map((datum, index) => {
          return (
            <Column key={index + datum[0]}>
              <NameDiv>
                <DisplayPicture /> <h4>{datum[0]}</h4>
              </NameDiv>
              <h4>{datum[1]}</h4>
              <DateDiv>
                <h4>{datum[2]}</h4>
                <ThreeDots
                  onClick={() => {
                    setActiveDropDown(!activeDropDown);
                    setClickedColumn(index);
                  }}
                >
                  ...
                </ThreeDots>
                {activeDropDown && index === clickedColumn && (
                  <Dropdown appointment={"Upcoming"} />
                )}
              </DateDiv>
            </Column>
          );
        })}
        {data?.length === 0 && (
          <TabBodyText>
            Drugs prescribed by your doctor will appear here.
          </TabBodyText>
        )}
      </TabBody>
    </PrescriptionListContainer>
  );
};
