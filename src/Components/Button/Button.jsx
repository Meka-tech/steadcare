import React from "react";
import styled from "styled-components";

export const Button = ({
  text = "Button",
  bgColor,
  fontSize = "16px",
  fontWeight,
  borderRadius,
  color,
  border,
}) => {
  return (
    <Container
      bgColor={bgColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      color={color}
      border={border}
    >
      {text}
    </Container>
  );
};

const Container = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  width: fit-content;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  color: ${(props) => (props.color ? props.color : "white")};
  border: ${(props) => (props.border ? props.border : "none")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgba(0, 0, 255, 0.9)"};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
