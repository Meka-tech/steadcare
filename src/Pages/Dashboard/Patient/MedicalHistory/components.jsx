import moment from "moment";
import { Spinner } from "../component";
import {
  Column,
  DisplayPicture,
  MedicalHistoryContainer,
  NameDiv,
  Status,
  StatusDiv,
  TabBody,
  TabBodyText,
  TabHeader,
  Title
} from "./style";

export const MediacalHistory = ({ data, loading }) => {
  return (
    <>
      <Title>Medical History</Title>
      <MedicalHistoryContainer>
        <TabHeader>
          <h2>Doctor</h2>
          <h2>ILLNESS</h2>
          <h2>DATE</h2>
        </TabHeader>
        <TabBody>
          {data?.map((datum, index) => {
            const m = moment(datum.time);
            return (
              <Column key={index + datum._id}>
                <NameDiv>
                  <DisplayPicture img={datum.doctor.avatar.url} />{" "}
                  <h4>{datum.name}</h4>
                </NameDiv>
                <h4>{datum[1]}</h4>
                <h4>{m.format("L")}</h4>
              </Column>
            );
          })}
          {data?.length < 1 && loading === false && (
            <TabBodyText>
              Records will appear here after you’ve had a session.
            </TabBodyText>
          )}
          {loading && <Spinner />}
        </TabBody>
      </MedicalHistoryContainer>
    </>
  );
};

export const MediacalHistoryInquiry = ({ data, loading }) => {
  return (
    <>
      <Title>Medical History Inquiry</Title>
      <MedicalHistoryContainer>
        <TabHeader>
          <h2>REQUESTING DOCTOR </h2>
          <h2>ACCESS</h2>
          <h2>DATE</h2>
        </TabHeader>
        <TabBody>
          {data?.map((datum, index) => {
            const m = moment(datum.time);
            return (
              <Column key={index + datum[0]}>
                <NameDiv>
                  <DisplayPicture img={datum.doctor.avatar.url} />{" "}
                  <h4>{datum.name}</h4>
                </NameDiv>
                <Status status={`${datum[1]}`}>{datum[1]}</Status>
                <h4>{m.format("L")}</h4>
              </Column>
            );
          })}
          {data?.length === 0 && loading === false && (
            <TabBodyText>
              Medical history inquiries will appear here when requested.{" "}
            </TabBodyText>
          )}
          {loading && <Spinner />}
        </TabBody>
      </MedicalHistoryContainer>
    </>
  );
};
