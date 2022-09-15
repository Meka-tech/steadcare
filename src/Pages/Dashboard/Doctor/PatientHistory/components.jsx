import { useRef } from "react";
import { useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";
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
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

  const Dropdown = ({ appointment }) => {
    return (
      <DropdownContainer active={activeDropDown} ref={dropDownRef}>
        <div>
          <DropdownItem>Prescribe</DropdownItem>
          <DropdownItem>View form</DropdownItem>
          <DropdownItem>Create Med History</DropdownItem>
          <DropdownItem>Clear</DropdownItem>
        </div>
      </DropdownContainer>
    );
  };
  return (
    <>
      <Title>Patient History</Title>
      <MedicalHistoryContainer>
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
          {!data && (
            <TabBodyText>
              Patients history will appear here after sessions
            </TabBodyText>
          )}
        </TabBody>
      </MedicalHistoryContainer>
    </>
  );
};
