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
import axios from "axios";
import { BaseUrl } from "../../../../Utilities";
import moment from "moment";

export const PrescriptionList = ({ data, loading }) => {
  const [activeTab, setActiveTab] = useState("UA");
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [clickedColumn, setClickedColumn] = useState();
  const [prescriptionID, setPrescriptionID] = useState();
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setActiveDropDown(false));

  const [modalActive, setModalActive] = useState(false);

  const Dropdown = () => {
    const ClearPrescription = () => {
      var config = {
        method: "delete",
        url: `${BaseUrl}/delete-prescriptions/${prescriptionID}`,
        headers: {}
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
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

        <DropdownItem
          onClick={() => {
            setActiveDropDown(false);
            ClearPrescription();
          }}
        >
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
              <ModalDisplayPicture img />
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
          const m = moment(datum.time);
          return (
            <Column key={index + datum._id}>
              <NameDiv>
                <DisplayPicture img={datum.doctor.avatar.url} />{" "}
                <h4>{datum.name}</h4>
              </NameDiv>
              <h4>{datum[1]}</h4>
              <DateDiv>
                <h4>{m.format("L")}</h4>
                <ThreeDots
                  onClick={() => {
                    setActiveDropDown(!activeDropDown);
                    setClickedColumn(index);
                    setPrescriptionID(datum._id);
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
