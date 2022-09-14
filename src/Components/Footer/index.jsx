import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import { ReactComponent as FBIcon } from "../../Images/SocialMediaIcons/LightMode/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../Images/SocialMediaIcons/LightMode/twitterIcon.svg";
import { ReactComponent as InstagramIcon } from "../../Images/SocialMediaIcons/LightMode/instagramIcon.svg";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <TextDiv>
        <LogoSection>
          <Logo
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            height={"4rem"}
            width={"4rem"}
          />
          <h1> SteadCare</h1>
        </LogoSection>
        <Text>
          Steadcare is registered telemedical company made up of top doctors
          touching the lives of many patients.
        </Text>
        <SocialMediaIcons>
          <FBIcon style={{ cursor: "pointer" }} width="4rem" height={"4rem"} />
          <InstagramIcon
            style={{ cursor: "pointer" }}
            width="4rem"
            height={"4rem"}
          />
          <TwitterIcon
            style={{ cursor: "pointer" }}
            width="4rem"
            height={"4rem"}
          />
        </SocialMediaIcons>
      </TextDiv>
      <Link>
        <LinkHeaderDiv>
          <h1>Quick Links</h1>
          <h1>Help</h1>
          <h1>Transparency</h1>
        </LinkHeaderDiv>
        <Links>
          <h2 onClick={() => navigate("/login")}>Login</h2>
          <h2 onClick={() => navigate("/about-us")}>About Us</h2>
          <h2 onClick={() => navigate("/terms-and-conditions")}>
            Terms and Conditions
          </h2>
          <h2 onClick={() => navigate("/sign-up")}>Sign Up</h2>
          <h2 onClick={() => navigate("/contact-us")}>Contact Us</h2>
          <h2 onClick={() => navigate("/privacy-policy")}>Privacy Policy</h2>
          <h2>Book Doctor</h2>
          <h2 onClick={() => navigate("/FAQs")}>FAQs</h2>
        </Links>
      </Link>
      <Reserved>
        <h1>© 2022 STEADCARE. All rights reserved</h1>
      </Reserved>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 44rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.04);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 8rem;
  padding-top: 10rem;
`;

const TextDiv = styled.div`
  width: 40rem;
`;
const LogoSection = styled.div`
  width: 20rem;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
  height: 2rem;
  h1 {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-align: left;
    color: rgba(0, 0, 255, 0.9);
    text-transform: uppercase;
    margin-left: 0.1rem;
    cursor: pointer;
  }
`;
const Text = styled.h1`
  text-align: left;
  font-weight: 500;
  width: 50%;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 2rem;
`;
const SocialMediaIcons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Link = styled.div`
  width: 70rem;
`;

const LinkHeaderDiv = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  margin-bottom: 4rem;
  height: 2rem;

  h1 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 1.8rem;
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  grid-row-gap: 2rem;

  h2 {
    text-align: left;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const Reserved = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;
