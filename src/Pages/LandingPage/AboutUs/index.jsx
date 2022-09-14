import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import { ReactComponent as AboutBanner } from "../../../Images/Banners/about_us_banner.svg";

export const AboutUs = () => {
  return (
    <Main>
      <Navbar active={"AboutUs"} />
      <Banner img={<AboutBanner width={"100%"} height={"100%"} />} />
      <Footer />
    </Main>
  );
};
