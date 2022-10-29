import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../../../Components";
import { Banner } from "../component";
import { Main } from "../style";
import AboutBanner from "../../../Images/Banners/about_us.png";
import PhoneSteth from "../../../Images/phone_steth.png";
import Quality from "../../../Images/high_quality.jpg";
import Barriers from "../../../Images/barriers.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { mobile } from "../../../Utilities/responsive";
import { useNavigate } from "react-router";
export const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Navbar active={"AboutUs"} />
      <Banner img={AboutBanner} />
      <TopDiv>
        <TopText>
          <h1>
            Steadcare is a digital healthcare platform, providing remote medical
            services to clients. Patients use our platform to book Doctors
            online and take better care of their health. On the other hand
            Doctors and practitioners use Steadcare as a bridge to connect with
            patients. We continuously work hard to enhance Patient-Doctor
            engagement and deliver better health outcomes.
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
              We practise high quality{" "}
              {<span style={{ color: "blue" }}>care</span>}
            </h1>
            <h2>
              Every single doctor registered with steadcare are licensed and
              trained through our online care program. Their competence is
              complemented by the eagerness to deliver outstanding care to all
              our patients.
            </h2>
            <div onClick={() => navigate("/sign-up")}>
              <h2>Book Doctor</h2>
              <AiOutlineArrowRight color="blue" size={15} />
            </div>
          </WhyTextDiv>
        </RightEnd>
        <LeftEnd>
          <WhyTextDiv>
            <h1>
              We remove barriers to make heath
              {<span style={{ color: "blue" }}>care</span>} convenient
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
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem 2.5rem",
    height: "fit-content"
  })}
`;
const TopText = styled.div`
  width: 45%;
  ${mobile({
    width: "100%",
    marginBottom: "4rem"
  })}
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 4rem;
    ${mobile({
      lineHeight: "3.5rem"
    })}
  }
`;
const TopImage = styled.img`
  height: 100%;
  border-radius: 1rem;
  width: 45rem;
  object-fit: contain;
  ${mobile({
    height: "80%"
  })}
`;
const WhyChooseTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 5rem;
  ${mobile({
    fontSize: "2.5rem",
    marginBottom: "3rem"
  })}
`;
const WhyChoose = styled.div`
  padding: 8rem 5rem;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-row-gap: 10rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    padding: "2rem 0rem",
    height: "fit-content",
    gridRowGap: "5rem"
  })}
`;
const LeftEnd = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
  ${mobile({
    justifyContent: "center"
  })};
`;
const RightEnd = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  ${mobile({
    justifyContent: "center"
  })};
`;
const WhyTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
    textAlign: "center"
  })};
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
    ${mobile({
      width: "90%",
      margin: "0 auto",
      lineHeight: "3.5rem"
    })};
  }
  div {
    margin-top: 2rem;
    cursor: pointer;
    display: flex;
    color: blue;
    align-items: center;
    width: 20rem;
    ${mobile({
      width: "15rem",
      margin: "2rem auto"
    })};
  }
`;
const WhyImageDiv = styled.img`
  height: 35rem;
  border-radius: 1rem;
  width: 35rem;
  object-fit: contain;
`;
