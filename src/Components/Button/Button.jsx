import React from "react";
import styled from "styled-components";
import { ReactComponent as Spinner } from "../../Images/Spinner.svg";
import "./Button.styles.css";

export const Button = ({
  text = "Button",
  bgColor,
  fontSize = "16px",
  borderRadius,
  color,
  border,
  onClick,
  width,
  isLoading
}) => {
  return (
    <Container
      bgColor={bgColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      color={color}
      border={border}
      onClick={onClick}
      width={width}
    >
      {text}
      {isLoading ? <Spinner className="loader-spin" /> : null}
    </Container>
  );
};

const Container = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  color: ${(props) => (props.color ? props.color : "white")};
  border: ${(props) => (props.border ? props.border : "none")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgba(0, 0, 255, 0.9)"};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  font-weight: 600;
  line-height: 20px;
  display: flex;
  letter-spacing: 0em;
  transition: all 0.2s ease-in-out;
`;
