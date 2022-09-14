import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import { ReactComponent as FAQBanner } from "../../../Images/Banners/FAQs_banner.svg";

export const FAQs = () => {
  return (
    <Main>
      <Navbar active={""} />
      <Banner img={<FAQBanner width={"100%"} height={"100%"} />} />
      <Footer />
    </Main>
  );
};
