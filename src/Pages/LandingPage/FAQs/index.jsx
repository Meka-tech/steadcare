import React from "react";
import styled from "styled-components";
import { FAQElement, Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import { ReactComponent as FAQBanner } from "../../../Images/Banners/FAQs_banner.svg";

export const FAQs = () => {
  return (
    <Main>
      <Navbar active={""} />
      <Banner img={<FAQBanner width={"100%"} height={"100%"} />} />
      <Body>
        <FAQElement
          question={"What’s the fastest way to reach us?"}
          answer={
            "We give quick replies on all our socails but we are active 24/7 on our WhatsApp business account "
          }
        />
      </Body>
      <Footer />
    </Main>
  );
};

const Body = styled.div`
  padding: 2rem 5rem;
`;
