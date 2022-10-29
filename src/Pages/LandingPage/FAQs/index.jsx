import React from "react";
import styled from "styled-components";
import { FAQElement, Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import FAQBanner from "../../../Images/Banners/FAQs_banner.png";
import { mobile } from "../../../Utilities/responsive";

export const FAQs = () => {
  return (
    <Main>
      <Navbar active={""} />
      <Banner img={FAQBanner} />
      <Body>
        <FAQElement
          question={"How can i create an account with steadcare"}
          answer={
            "Click on the sign up and choose your role as either a patient or doctor. If your signing up as a patient all you have to do is fill the registration form. If you’re signing up as a doctor, you’ll be required to submit various document and wait for verification from us "
          }
        />
        <FAQElement
          question={"How do i retrieve my password?"}
          answer={
            "If you’ve forgotten your password, you can retrieve it by using the forgotten password function found when trying to log in."
          }
        />
        <FAQElement
          question={"How do i book a doctor?"}
          answer={
            "Once registered as a patient, you can book a doctor after you have logged in."
          }
        />
        <FAQElement
          question={"How do i update my profile?"}
          answer={
            "Changing information provided during registration can be done by clicking the profile option on your dashboard. Same goes for adding new information."
          }
        />
        <FAQElement
          question={"Can i sign up as a nurse?"}
          answer={
            "For now our services are limited to only patients and doctors. "
          }
        />
        <FAQElement
          question={"How do i make payment?"}
          answer={
            "Paying for a doctor is secured and made online using paystack. Payments has to made before booking a doctor as it validates your appointment."
          }
        />
        <FAQElement
          question={"How does a doctor receive payments made by patients?"}
          answer={
            "Payments are sent to the bank account provided by you after completing an appointment. "
          }
        />
        <FAQElement
          question={"Can i chat with a doctor?"}
          answer={
            "Yes, you can chat with a doctor only in an onging appointment with the doctor."
          }
        />
        <FAQElement
          question={"Is my medical information safe with steadcare?"}
          answer={
            "Yes, your medical information and history is confidential and safe with us."
          }
        />
      </Body>
      <Footer />
    </Main>
  );
};

const Body = styled.div`
  padding: 2rem 5rem;
  padding-bottom: 20rem;
  ${mobile({
    padding: "8rem 2rem"
  })}
`;
