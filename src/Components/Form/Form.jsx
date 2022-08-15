import React from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as EyeIcon } from "../../Images/FormIcons/eyeIcon.svg";
import { ReactComponent as EyeClosedIcon } from "../../Images/FormIcons/eyeClosedIcon.svg";

export const TextForm = ({
  title,
  inputValue,
  placeholder,
  type,
  icon,
  errorMsg,
  width,
  height,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Container width={width} focused={focused}>
      <Title focused={focused}>{title}</Title>
      <InputField focused={focused}>
        <Input
          placeholder={placeholder}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          value={inputValue}
          type={type ? type : "text"}
          {...rest}
        />
      </InputField>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </Container>
  );
};

export const PasswordForm = ({
  title,
  inputValue,
  placeholder,
  type,
  icon,
  errorMsg,
  width,
  height,
  editable,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const TogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [focused, setFocused] = useState(false);
  return (
    <Container width={width}>
      <Title focused={focused}>{title}</Title>
      <InputField focused={focused}>
        <Input
          height={height}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          editable={editable}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          {...rest}
          value={inputValue}
        />
        <Icon style={{ cursor: "pointer" }} onClick={() => TogglePassword()}>
          {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
        </Icon>
      </InputField>
      {errorMsg ? <ErrorMsg width={width}>{errorMsg}</ErrorMsg> : null}
    </Container>
  );
};

const Container = styled.form`
  top: 0;
  margin-bottom: 15px;
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease-in-out;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const Input = styled.input`
  &[type="password"] {
    font-family: Verdana;
    font-size: 20px;
    letter-spacing: 0.125em;
  }
  margin-left: 10px;
  font-size: 16px;
  color: black;
  width: 85%;
  outline: none;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.03em;
  border: none;
  &::placeholder {
    color: rgba(75, 72, 78, 0.7);
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
`;

const InputField = styled.div`
  height: ${(props) => (props.height ? props.height : "45px")};
  width: 100%;
  border-radius: 5px;
  border: ${(props) =>
    props.focused
      ? "1px solid rgba(0, 0, 255, 0.9)"
      : "1px solid rgba(85, 85, 85, 1)"};
  display: flex;
`;
const Title = styled.label`
  color: ${(props) => (props.focused ? "rgba(0, 0, 255, 0.9)" : "black")};
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  margin-bottom: 8px;
  display: flex;
  text-transform: capitalize;
  flex-direction: column;
`;

const Icon = styled.i`
  z-index: 200;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const ErrorMsg = styled.h3`
  color: rgba(255, 0, 0, 1);
  margin: 0;
  padding: 0;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.03em;
  padding-top: 5px;
  width: ${(props) => (props.width ? props.width : "300px")};
`;
