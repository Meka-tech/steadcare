import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import ContactBanner from "../../../Images/Banners/contact_us_banner.jpg";
import { BlueborderCard, EmailInput } from "./component";
import { ReactComponent as NewsLetterSvg } from "../../../Images/news_letter_icons.svg";
import { useNavigate } from "react-router";

export const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Navbar active={"ContactUs"} />
      <Banner
        title={"CONTACT US"}
        desc={"Let’s hear from you!  "}
        img={ContactBanner}
      />
      <Cards>
        <BlueborderCard
          title={"Get assistance 24/7."}
          link={"+2348034003788"}
          desc={
            "Having problems using our service or just want to make enquires? Our customer support team are eager to help."
          }
        />
        <BlueborderCard
          title={"Email Us"}
          link={"help@steadcare.com"}
          desc={
            "Our mailbox is managed during business hours, so our replies may vary depending on the time and day."
          }
        />
      </Cards>
      <NewsLetter>
        <h1>Subscribe To Our Newsletter </h1>
        <h2>Never miss out on latest news, discounts or special offers.</h2>
        <EmailInput />
        <NewsLetterSvg
          style={{ position: "absolute", right: "0", top: "4rem" }}
          height="18rem"
          width={"30rem"}
        />
      </NewsLetter>
      <FAQdiv>
        <h1>Frequently Asked Questions</h1>
        <h2>
          Visit our{" "}
          {
            <h2
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/FAQs")}
            >
              FAQs
            </h2>
          }{" "}
          page for answers
        </h2>
      </FAQdiv>
      <Footer />
    </Main>
  );
};

const Cards = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
  padding: 8rem 0;
  box-sizing: border-box;
  margin: 0 auto;
`;

const NewsLetter = styled.div`
  background-color: rgba(0, 0, 255, 0.04);
  position: relative;
  padding: 4rem 0;
  padding-left: 10rem;
  text-align: left;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 4rem;
    width: 35%;
    line-height: 2rem;
  }
`;
const FAQdiv = styled.div`
  padding: 8rem 10rem;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.5rem;
    width: 20%;
    margin-bottom: 2rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    width: 20%;
    display: inline;
  }
`;
