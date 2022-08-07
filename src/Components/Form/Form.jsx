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
  editable,
  ...rest
}) => {
  return (
    <Container>
      <ErrorMsg>{errorMsg}</ErrorMsg>
      <InputField
        width={width}
        height={height}
        placeholder={placeholder}
        editable={editable}
        value={inputValue}
        {...rest}
      />
      <Title>{title}</Title>
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
          type={showPassword ? "text" : "new-password"}
          editable={editable}
          {...rest}
          value={inputValue}
        />
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
  margin-bottom: 15px;
  position: relative;
  width: fit-content;
  height: fit-content;
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
  padding-right: 30px;
  font-size: 16px;
  color: black;
  line-height: 19.5px;
  height: ${(props) => (props.height ? props.height : "35px")};
  width: ${(props) => (props.width ? props.width : "280px")};
  border-radius: 5px;
  outline: none;
  border: ${(props) =>
    props.editable
      ? "1px solid rgba(85, 85, 85, 0.3)"
      : "1px solid rgba(85, 85, 85, 1)"};
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-align: left;
  background-color: ${(props) =>
    props.editable ? "rgba(196, 196, 196, 0.1)" : "white"};

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
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  margin-bottom: 8px;
  display: flex;
  text-transform: capitalize;
  flex-direction: column;
  ${InputField}:focus ~ & {
    color: rgba(0, 0, 255, 0.9);
  }
`;

const Icon = styled.i`
  position: absolute;
  z-index: 200;
  bottom: 5px;
  right: 10px;

  cursor: pointer;
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
