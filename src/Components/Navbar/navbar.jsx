/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import { ReactComponent as HamburgerIcon } from "../../Images/NavbarElements/hamburgerIcon.svg";
import { mobile } from "../../Utilities/responsive";
import { Button } from "../Button/Button";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [token, setToken] = useState("");
  const [active, setActive] = useState(false);
  const { loggedIn, role } = useSelector((state) => state.reducer.loggedIn);
  const ContainerRef = useRef();

  useClickOutside(ContainerRef, () => setActive(false));

  const navigate = useNavigate();
  return (
    <Fragment>
      <Container ref={ContainerRef}>
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
          {loggedIn ? (
            <Button
              text="Dashboard"
              width={"40%"}
              bgColor={"white"}
              border={" 1px solid rgba(0, 0, 255, 1)"}
              fontSize="1.6rem"
              fontWeight={"500"}
              onClick={() => navigate(`/${role}/home`)}
              height={"4rem"}
              color="black"
            />
          ) : (
            <>
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
            </>
          )}
        </ButtonSection>
        <HamburgerDiv>
          {active ? (
            <AiOutlineClose
              size={25}
              color={"blue"}
              onClick={() => {
                setActive(false);
              }}
            />
          ) : (
            <HamburgerIcon
              onClick={() => {
                setActive(true);
              }}
            />
          )}
        </HamburgerDiv>
      </Container>
      <MobileNav active={active} ref={ContainerRef}>
        <MobileNavItem onClick={() => navigate("/")}>Home</MobileNavItem>
        <MobileNavItem onClick={() => navigate("/about-us")}>
          About Us
        </MobileNavItem>
        <MobileNavItem onClick={() => navigate("/contact-us")}>
          Contact Us
        </MobileNavItem>
        {loggedIn ? (
          <Button
            text="Dashboard"
            width={"fit-content"}
            bgColor={"white"}
            border={" 1px solid rgba(0, 0, 255, 1)"}
            fontSize="1.6rem"
            fontWeight={"500"}
            onClick={() => navigate(`/${role}/home`)}
            height={"3.5rem"}
            color="black"
          />
        ) : (
          <>
            <Button
              text="Login"
              width={"fit-content"}
              bgColor={"white"}
              color="black"
              border={" 1px solid rgba(0, 0, 255, 1)"}
              fontSize="1.6rem"
              fontWeight={"500"}
              height={"2.5rem"}
              onClick={() => navigate("/login")}
            />
            <div style={{ margin: "0.5rem" }} />
            <Button
              text="sign up"
              width={"fit-conten"}
              fontSize="1.6rem"
              fontWeight={"500"}
              onClick={() => navigate("/sign-up")}
              height={"2.5rem"}
            />
          </>
        )}
      </MobileNav>
    </Fragment>
  );
};

const Fragment = styled.div`
  width: 100%;
  top: 0;
  background-color: white;
  position: relative;
`;

const Container = styled.div`
  padding: 0 2rem;
  width: 100vw;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  position: relative;
  z-index: 20;
  ${mobile({
    backgroundColor: "rgba(246, 246, 246, 1)",
    height: "5rem",
    padding: "0 1rem"
  })}
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
  ${mobile({
    display: "none"
  })}
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
  ${mobile({
    display: "none"
  })}
`;

const HamburgerDiv = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 5rem;
  ${mobile({
    display: "flex"
  })}
`;

const MobileNav = styled.div`
  width: 100%;
  height: 20rem;
  display: none;
  z-index: 10;
  position: absolute;
  background-color: white;
  transition: all 0.3s ease-in-out;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  box-sizing: border-box;
  transform: ${(props) =>
    props.active ? "translateY(0)" : "translateY(-20rem)"};
  ${mobile({
    display: "flex"
  })};
`;

const MobileNavItem = styled.div`
  width: fit-content;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;
