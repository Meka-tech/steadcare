import React from "react";
import styled from "styled-components";
import { Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import { ReactComponent as HomeBanner } from "../../../Images/Banners/home_banner.svg";
import { BlueborderCard, TransparentBlueborderCard } from "./component";
import { ReactComponent as PatientBed } from "../../../Images/CardIcon/patient_bed.svg";
import { ReactComponent as DoctorVector } from "../../../Images/CardIcon/doctor_vector.svg";
import { ReactComponent as DoctorCallVector } from "../../../Images/CardIcon/doctor_call_vector.svg";
import { ReactComponent as HistoryVector } from "../../../Images/CardIcon/history_vector.svg";
import { ReactComponent as MedicationVector } from "../../../Images/CardIcon/medicationVector.svg";
import { ReactComponent as WalletVector } from "../../../Images/CardIcon/wallet_vector.svg";

export const Home = () => {
  return (
    <Main>
      <Navbar active={"Home"} />
      <Banner
        title={"Book Appointments with Doctors anywhere, anytime."}
        button={true}
        desc={
          "Access steady and quality care from the best Doctors. With Steadycare you’re in safe hands.  "
        }
        img={<HomeBanner width={"100%"} height={"100%"} />}
      />
      <WhoCanDiv>
        <h1>Who can use Steadcare?</h1>
        <h2>
          We offer our medical services to patients irrespective of the age
          group and qualified Doctors who familair with telemedicine.
        </h2>
        <WhoCanDiv2>
          <BlueborderCard
            icon={<PatientBed width={"5rem"} height={"5rem"} />}
            title={"Patients"}
            desc={"Get access to quality and steady healthcare with ease."}
          />
          <BlueborderCard
            icon={<DoctorVector width={"5rem"} height={"5rem"} />}
            title={"Doctors"}
            desc={
              "Register as a qualified doctor, treat patients and earn from anywhere."
            }
          />
        </WhoCanDiv2>
      </WhoCanDiv>
      <WeProv>
        <WeProvText>
          <h1>
            At Steadcare we provide access to quality and affordable healthcare
            for all
          </h1>
          <h2>
            Access to quality health care services are necessary for every human
            being. We have a duty to safeguard our lives and giving you access
            to essential and steady healthcare is why we are here!
          </h2>
        </WeProvText>
        <WeProveCards>
          <TransparentBlueborderCard
            icon={<DoctorCallVector height={"5rem"} width={"5rem"} />}
            desc={
              "Have one-on-one video calls with top notch Doctors in Nigeria."
            }
          />
          <TransparentBlueborderCard
            icon={<HistoryVector height={"5rem"} width={"5rem"} />}
            desc={
              "Keep track of your medical history and previous appointments."
            }
          />
          <TransparentBlueborderCard
            icon={<MedicationVector height={"5rem"} width={"5rem"} />}
            desc={
              "View medications prescribed by your doctor even after appointments."
            }
          />
          <TransparentBlueborderCard
            icon={<WalletVector height={"5rem"} width={"5rem"} />}
            desc={"Pay for your online sessions easily without stress. "}
          />
        </WeProveCards>
      </WeProv>
      <LearnHow></LearnHow>
      <LearnHowCards></LearnHowCards>
    </Main>
  );
};

const WhoCanDiv = styled.div`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  text-align: center;
  padding: 4rem 0;
  text-align: center;
  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 500;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 8rem;
  }
`;
const WhoCanDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const WeProv = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 255, 0.05);
  height: fit-content;
  padding: 6rem 4rem;
  display: flex;
  justify-content: space-between;
`;
const WeProvText = styled.div`
  flex: 1;
  h1 {
    font-weight: 600;
    font-size: 3rem;
    line-height: 5rem;
    width: 80%;
    margin-bottom: 5rem;
  }
  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 3rem;
    width: 80%;
    letter-spacing: 6%;
  }
`;

const WeProveCards = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 2rem;
`;

const LearnHow = styled.div`
  h1 {
  }
  h2 {
  }
`;

const LearnHowCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
