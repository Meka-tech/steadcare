import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

import { mobile, tab } from "../../Utilities/responsive";

export const FAQElement = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const OnClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Question>
        <h1> {question}</h1>
        <SVG open={open} onClick={() => OnClick()}>
          <AiOutlineDown
            size={20}
            style={{
              transform: open ? "rotate(180deg)" : null,
              transition: "all 0.25s ease-in-out",
              color: "blue"
            }}
          />
        </SVG>
      </Question>
      <Answer open={open}>
        <h1>{answer}</h1>
      </Answer>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${mobile({ marginTop: "0" })};
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${mobile({
    width: "100%",
    alignItems: "center"
  })}
  h1 {
    font-weight: 500;
    color: blue;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    flex: 2.5;
    text-align: left;
    line-height: 29.69px;

    ${tab({
      flex: "1",
      lineHeight: "19.5px",
      width: "600px",
      alignItems: "center",
      fontSize: "18px"
    })}
    ${mobile({
      flex: "1",
      lineHeight: "19.5px",
      width: "380px",
      alignItems: "center",
      fontSize: "16px"
    })}
  }
`;
const SVG = styled.div`
  flex: 1;
  display: flex;
  margin-left: 500px;
  cursor: pointer;

  z-index: 10;
  ${tab({
    marginLeft: "0px",
    width: "20px",
    flex: "0.1"
  })}
  ${mobile({
    marginLeft: "0px",
    width: "20px",
    flex: "0.1"
  })}
`;
const Answer = styled.div`
  align-self: flex-start;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 80%;
  transform: ${(props) => (props.open ? null : "translateY(-55px)")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.15s ease-in-out;
  ${mobile({
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    marginTop: "10px",
    marginBottom: "40px"
  })}
  h1 {
    font-weight: 500;
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    text-align: left;
    width: 100%;
    line-height: 40px;
    ${mobile({
      lineHeight: "18px",
      width: "380px",
      alignItems: "center",
      fontSize: "14px"
    })}
  }
`;