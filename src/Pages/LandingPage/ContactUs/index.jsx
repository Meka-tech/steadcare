import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import { ReactComponent as ContactBanner } from "../../../Images/Banners/contact_us_banner.svg";

export const ContactUs = () => {
  return (
    <Main>
      <Navbar active={"ContactUs"} />
      <Banner
        title={"CONTACT US"}
        desc={"Let’s hear from you!  "}
        img={<ContactBanner width={"100%"} height={"100%"} />}
      />
      <Footer />
    </Main>
  );
};
