import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, TextForm } from "../../../Components";
import styled from "styled-components";
import { AuthMargin, Body, Container, LogoDiv, TabContent } from "../style";
import { ReactComponent as EmailSentIcon } from "../../../Images/EmailSent.svg";

export const EmailSent = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <AuthMargin />
      <Body>
        <LogoDiv />
        <TabContent>
          <Forms>
            <Headers>Email Sent</Headers>
            <SubHeader>
              Please check your mail and click the received link to reset
              password.
            </SubHeader>
            <Icon>
              <EmailSentIcon />
            </Icon>
            <ButtonDiv>
              <Button
                text="Go to Email"
                onClick={() => {}}
                width="100%"
                type="submit"
              />
            </ButtonDiv>
            <Span>
              Didn’t receive the link?
              <h4 onClick={() => {}}>Resend</h4>
            </Span>
          </Forms>
        </TabContent>
      </Body>
    </Container>
  );
};
const Icon = styled.div`
  margin: 2rem auto;
  margin-top: 4rem;
`;
export const SubHeader = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.5rem;
  text-align: center;
  width: 100%;
  color: rgba(34, 34, 34, 0.8);
`;

export const Headers = styled.h2`
  font-weight: 600;
  font-size: 2.2rem;
  color: black;
  line-height: 3.413rem;
  text-align: center;
  margin: 0;
  padding: 0;
`;
const Forms = styled.div`
  width: 50%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;
const ButtonDiv = styled.div`
  width: 100%;
  margin: 2.5rem 0;
`;
const Span = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  h4 {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 255, 0.9);
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
  }
`;
