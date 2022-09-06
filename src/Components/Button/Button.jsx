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
  height,
  isLoading,
  ...rest
}) => {
  return (
    <Container
      backgroundColor={bgColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      color={color}
      border={border}
      onClick={onClick}
      width={width}
      height={height}
      {...rest}
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
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0.5rem"};
  color: ${(props) => (props.color ? props.color : "white")};
  border: ${(props) => (props.border ? props.border : "none")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(0, 0, 255, 0.9)"};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  font-weight: 600;
  line-height: 2rem;
  display: flex;
  letter-spacing: 0em;
  transition: all 0.2s ease-in-out;
`;
