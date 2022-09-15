import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import { Button } from "../Button/Button";

export const Navbar = ({ active }) => {
  const loggedIn = useSelector((state) => state.reducer.loggedIn);
  const navigate = useNavigate();
  return (
    <Container>
      <LogoSection>
        <Logo
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          height={"3rem"}
          width={"3rem"}
        />
        <h1> SteadCare</h1>
      </LogoSection>
      <LinkSection>
        <Link onClick={() => navigate("/")}>
          <h1
            style={{
              color: active === "Home" ? "rgba(0, 0, 255, 1)" : null
            }}
          >
            Home
          </h1>
        </Link>
        <Link onClick={() => navigate("/about-us")}>
          <h1
            style={{
              color: active === "AboutUs" ? "rgba(0, 0, 255, 1)" : null
            }}
          >
            About Us
          </h1>
        </Link>
        <Link onClick={() => navigate("/contact-us")}>
          <h1
            style={{
              color: active === "ContactUs" ? "rgba(0, 0, 255, 1)" : null
            }}
          >
            Contact Us
          </h1>
        </Link>
      </LinkSection>
      <ButtonSection>
        <Button
          text="Login"
          width={"35%"}
          bgColor={"white"}
          color="black"
          border={" 1px solid rgba(0, 0, 255, 1)"}
          fontSize="1.6rem"
          fontWeight={"500"}
          height={"2.5rem"}
          onClick={() => navigate("/login")}
        />
        <Button
          text="sign up"
          width={"40%"}
          fontSize="1.6rem"
          fontWeight={"500"}
          onClick={() => navigate("/sign-up")}
          height={"2.5rem"}
        />
      </ButtonSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;
  width: 100vw;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const LogoSection = styled.div`
  width: 40rem;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  h1 {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-align: left;
    color: rgba(0, 0, 255, 0.9);
    text-transform: uppercase;
    margin-left: 0.1rem;
    cursor: pointer;
  }
`;
const LinkSection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 30rem;
`;
const Link = styled.div`
  cursor: pointer;
  h1 {
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    &:hover {
      color: rgba(0, 0, 255, 1);
    }
  }
`;
const ButtonSection = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 2rem;
`;
