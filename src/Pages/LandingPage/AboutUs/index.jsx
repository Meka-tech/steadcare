import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import { ReactComponent as AboutBanner } from "../../../Images/Banners/about_us_banner.svg";
import PhoneSteth from "../../../Images/phone_steth.png";
import Quality from "../../../Images/high_quality.jpg";
import Barriers from "../../../Images/barriers.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
export const AboutUs = () => {
  return (
    <Main>
      <Navbar active={"AboutUs"} />
      <Banner img={<AboutBanner width={"100%"} height={"100%"} />} />
      <TopDiv>
        <TopText>
          <h1>
            Steadcare is a digital healthcare platform, providing remote medical
            services to clients. Patients use our platform to book Doctors
            online take better care of their (and their family’s) health. On the
            other hand Doctors and practitioners use Steadcare as a bridge to
            connect with patients. We continuously work hard to ehance
            Patient-Doctor engagement and deliver better health outcomes.
          </h1>
          <h1>
            Founded in 2022, our mission is to improve the health of people
            around the world through revolutionary care and compassion. We
            believe that everyone should have access to instant and affordable
            care rendered by certified doctors, wherever and whenever needed.{" "}
          </h1>
        </TopText>
        <TopImage src={PhoneSteth} />
      </TopDiv>
      <WhyChooseTitle>WHY CHOOSE US</WhyChooseTitle>
      <WhyChoose>
        <LeftEnd>
          <WhyImageDiv src={Quality} />
        </LeftEnd>
        <RightEnd>
          <WhyTextDiv>
            <h1>
              We practise high quality {<h1 style={{ color: "blue" }}>care</h1>}
            </h1>
            <h2>
              Every single doctor registered with steadcare are licensed and
              trained through our online care program. Their competence is
              complemented by the eagerness to deliver outstanding care to all
              our patients.
            </h2>
            <div>
              <h2>Book Doctor</h2>
              <AiOutlineArrowRight color="blue" size={15} />
            </div>
          </WhyTextDiv>
        </RightEnd>
        <LeftEnd>
          <WhyTextDiv>
            <h1>
              We remove barriers to make heath
              {<h1 style={{ color: "blue" }}>care</h1>} convinent
            </h1>
            <h2>
              We believe we can make a difference in the world of telemedicine
              by creating a direct link between doctor and patient. Our fully
              functional online service creates a unfied and personalized
              customer experience from the comfort of your home.
            </h2>
          </WhyTextDiv>
        </LeftEnd>
        <RightEnd>
          <WhyImageDiv src={Barriers} />
        </RightEnd>
      </WhyChoose>
      <Footer />
    </Main>
  );
};

const TopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 5rem;
  box-sizing: border-box;
  height: 58rem;
  margin-bottom: 10rem;
`;
const TopText = styled.div`
  width: 45%;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 4rem;
  }
`;
const TopImage = styled.img`
  height: 100%;
  border-radius: 1rem;
  width: 45rem;
  object-fit: contain;
`;
const WhyChooseTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;
const WhyChoose = styled.div`
  padding: 8rem 5rem;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-row-gap: 10rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const LeftEnd = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
`;
const RightEnd = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;
const WhyTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    padding: 0;
    display: inline;
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 3.5rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    display: inline;
    font-weight: 500;
    font-size: 1.7rem;
    width: 60%;
    line-height: 4rem;
  }
  div {
    margin-top: 2rem;
    cursor: pointer;
    display: flex;
    color: blue;
    align-items: center;
    width: 20rem;
  }
`;
const WhyImageDiv = styled.img`
  height: 35rem;
  border-radius: 1rem;
  width: 35rem;
  object-fit: contain;
`;
