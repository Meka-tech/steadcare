import React from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as EyeIcon } from "../../Images/FormIcons/eyeIcon.svg";
import { ReactComponent as EyeClosedIcon } from "../../Images/FormIcons/eyeClosedIcon.svg";

export const TextForm = ({
  ref,
  title,
  inputValue,
  placeholder,
  type,
  icon,
  errorMsg,
  width,
  height,
}) => {
  const inputRef = useRef();

  return (
    <Container>
      <ErrorMsg>{errorMsg}</ErrorMsg>
      <InputField
        width={width}
        height={height}
        placeholder={placeholder}
        ref={inputRef}
      >
        {inputValue}
      </InputField>
      <Title>{title}</Title>
    </Container>
  );
};

export const PasswordForm = ({
  ref,
  title,
  inputValue,
  placeholder,
  type,
  icon,
  errorMsg,
  width,
  height,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const TogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container>
      {errorMsg ? <ErrorMsg width={width}>{errorMsg}</ErrorMsg> : null}
      <div
        style={{
          position: "relative",
          display: "flex ",
          flexDirection: "column-reverse",
        }}
      >
        <InputField
          width={width}
          height={height}
          placeholder={placeholder}
          ref={inputRef}
          type={showPassword ? "text" : "password"}
        >
          {inputValue}
        </InputField>
        <Icon style={{ cursor: "pointer" }} onClick={() => TogglePassword()}>
          {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
        </Icon>

        <Title>{title}</Title>
      </div>
    </Container>
  );
};

const Container = styled.form`
  top: 0;
  margin: 5px;
  margin-bottom: 20px;
  position: relative;
  width: fit-content;
  height: 100px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  transition: 0.2s ease-in-out;
`;

const InputField = styled.input`
  &[type="password"] {
    font-family: Verdana;
    font-size: 20px;
    letter-spacing: 0.125em;
  }
  overflow-x: scroll;
  margin: 0;
  padding: 0px 10px;
  font-size: 16px;
  color: black;
  line-height: 19.5px;
  height: ${(props) => (props.height ? props.height : "45px")};
  width: ${(props) => (props.width ? props.width : "300px")};
  border-radius: 5px;
  outline: none;
  border: 1px solid rgba(85, 85, 85, 1);
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-align: left;

  &::placeholder {
    color: rgba(75, 72, 78, 0.7);
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
  &:focus {
    border: 1px solid rgba(0, 0, 255, 0.9);
  }
`;
const Title = styled.label`
  color: rgba(85, 85, 85, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  ${InputField}:focus ~ & {
    color: rgba(0, 0, 255, 0.9);
  }
`;

const Icon = styled.i`
  position: absolute;
  z-index: 200;
  bottom: 10px;
  right: 10px;

  cursor: pointer;
`;

const ErrorMsg = styled.div`
  color: rgba(255, 0, 0, 1);
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.03em;
  text-align: left;
  padding-top: 5px;
  width: ${(props) => (props.width ? props.width : "300px")};
`;
