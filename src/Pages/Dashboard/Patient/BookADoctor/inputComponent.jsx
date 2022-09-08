import React from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export const InputComponent = ({
  title,
  inputValue,
  width,
  height,
  inactive,
  fontSize,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Container width={width} focused={focused}>
      <Title focused={focused}>{title}</Title>
      <InputField focused={focused} inactive={inactive} height={height}>
        <Input
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          value={inputValue}
          fontSize={fontSize}
          {...rest}
        />
      </InputField>
    </Container>
  );
};
const Container = styled.form`
  top: 0;
  margin-bottom: 1.5rem;
  position: relative;
  height: fit-content;
  align-items: flex-end;
  display: flex;
  transition: 0.2s ease-in-out;
  margin-bottom: 5rem;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const Input = styled.input`
  background-color: transparent;
  &[type="password"] {
    font-family: Verdana;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
    letter-spacing: 0.125em;
  }
  margin-left: 0rem;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  color: black;
  width: 100%;
  outline: none;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  border: none;
  &::placeholder {
    color: rgba(75, 72, 78, 0.7);
    padding: 0;
    margin: 0;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  }
`;

const InputField = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  height: 100%;
  width: 75%;
  border-bottom: ${(props) =>
    props.focused
      ? "1px dashed rgba(0, 0, 255, 0.9)"
      : props.inactive
      ? `1px dashed rgba(85, 85, 85, 0.3)`
      : "1px dashed rgba(85, 85, 85, 1)"};
  display: flex;
  background-color: ${(props) =>
    props.focused && props.inactive
      ? `rgba(0, 0, 187, 0.1)`
      : props.inactive
      ? `rgba(196, 196, 196, 0.1) `
      : null};
`;
const Title = styled.label`
  color: ${(props) => (props.focused ? "rgba(0, 0, 255, 0.9)" : "black")};
  font-weight: 500;
  text-align: left;
  font-size: 1.8rem;
  text-transform: uppercase;
  margin-right: 5rem;
`;

export const ComplaintInput = ({ placeHolder, value, ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <ComplaintInputDiv focused={focused}>
      <ComplaintInputField
        placeholder={placeHolder}
        value={value}
        {...rest}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
    </ComplaintInputDiv>
  );
};

const ComplaintInputDiv = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  border: ${(props) =>
    props.focused ? "1px solid rgba(0, 0, 255, 0.9)" : "1px solid #000000"};
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 5rem;
`;
const ComplaintInputField = styled.textarea`
  font-family: Montserrat;
  width: 100%;
  text-align: start;
  border: none;
  outline: none;
  font-size: 1.4rem;
  &::placeholder {
    color: rgba(85, 85, 85, 1);
    padding: 0;
    margin: 0;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  }
`;
