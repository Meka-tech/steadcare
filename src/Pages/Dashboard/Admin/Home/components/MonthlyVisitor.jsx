import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../../Utilities/responsive";

export const MonthlyVisitor = () => {
  return (
    <Container>
      <Title>Monthly Visitors</Title>
      <Body>
        <Header>
          <h1>View full report</h1>
        </Header>
        <Main></Main>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
  ${mobile({ marginBottom: "10rem", width: "95%" })}
`;

const Title = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;
const Body = styled.div`
  width: 100%;
  border: 0.5px solid black;
  height: 50rem;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    padding: 0;
    color: blue;
    font-weight: 500;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  height: 80%;
`;
