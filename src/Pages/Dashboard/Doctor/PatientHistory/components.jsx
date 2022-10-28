import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useClickOutside from "../../../../hooks/useClickOutside";
import { FormModal } from "../formModal";
import { PrescribeModal } from "../prescribeModal";
import {
  Column,
  DisplayPicture,
  DropdownContainer,
  DropdownItem,
  MedicalHistoryContainer,
  NameDiv,
  Status,
  StatusDiv,
  TabBody,
  TabBodyText,
  TabHeader,
  ThreeDots,
  Title
} from "./style";

export const MediacalHistory = ({ data }) => {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const dropDownRef = useRef();
  const [prescribeModal, setPrescribeModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  useClickOutside(dropDownRef, () => setActiveDropDown(false));
  const navigate = useNavigate();

  const Dropdown = ({ appointment }) => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        <div>
          <DropdownItem
            onClick={() => {
              setPrescribeModal(true);
              setActiveDropDown(false);
            }}
          >
            Prescribe
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setFormModal(true);
              setActiveDropDown(false);
            }}
          >
            View form
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/doctor/create-history")}>
            Create Med History
          </DropdownItem>
          <DropdownItem>Clear</DropdownItem>
        </div>
      </DropdownContainer>
    );
  };
  return (
    <>
      <Title>Patient History</Title>
      <MedicalHistoryContainer>
        {prescribeModal && <PrescribeModal setActive={setPrescribeModal} />}
        {formModal && (
          <FormModal setActive={setFormModal} patient={data[clickedColumn]} />
        )}
        <TabHeader>
          <h2>Patient</h2>
          <h2>ILLNESS</h2>
          <h2>DATE</h2>
        </TabHeader>
        <TabBody>
          {data?.map((datum, index) => {
            return (
              <Column key={index + datum[0]}>
                <NameDiv>
                  <DisplayPicture /> <h4>{datum[0]}</h4>
                </NameDiv>
                <h4>{datum[1]}</h4>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                    <Dropdown appointment={"Past"} />
                  )}
                </div>
              </Column>
            );
          })}
          {data?.length === 0 && (
            <TabBodyText>
              Patients history will appear here after sessions
            </TabBodyText>
          )}
        </TabBody>
      </MedicalHistoryContainer>
    </>
  );
};
