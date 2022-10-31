import React from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as EyeIcon } from "../../Images/FormIcons/eyeIcon.svg";
import { ReactComponent as EyeClosedIcon } from "../../Images/FormIcons/eyeClosedIcon.svg";
import { mobile } from "../../Utilities/responsive";

export const TextForm = ({
  title,
  inputValue,
  placeholder,
  type,
  icon,
  errorMsg,
  width,
  height,
  inactive,
  borderRadius,
  fontSize,
  backgroundColor,
  onClickIcon,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Container width={width} focused={focused}>
      <Title focused={focused}>{title}</Title>
      <InputField
        focused={focused}
        inactive={inactive}
        borderRadius={borderRadius}
        height={height}
        backgroundColor={backgroundColor}
      >
        <Input
          placeholder={placeholder}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          value={inputValue}
          type={type ? type : "text"}
          fontSize={fontSize}
          {...rest}
        />
        <Icon style={{ cursor: "pointer" }} onClick={() => onClickIcon}>
          {icon}
        </Icon>
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
          {showPassword ? (
            <EyeIcon width={"2rem"} height={"2rem"} />
          ) : (
            <EyeClosedIcon width={"2rem"} height={"2rem"} />
          )}
        </Icon>
      </InputField>
      {errorMsg ? <ErrorMsg width={width}>{errorMsg}</ErrorMsg> : null}
    </Container>
  );
};

const Container = styled.form`
  top: 0;
  margin-bottom: 1.5rem;
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease-in-out;
  width: ${(props) => (props.width ? props.width : "100%")};
  ${mobile({
    width: "100%",
    marginBottom: "2rem"
  })}
`;

const Input = styled.input`
  background-color: transparent;
  &[type="password"] {
    font-family: Verdana;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
    letter-spacing: 0.125em;
  }
  margin-left: 1rem;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  color: black;
  width: 85%;
  outline: none;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  border: none;
  &::placeholder {
    color: rgba(75, 72, 78, 0.7);
    padding: 0;
    margin: 0;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.6rem")};
    ${mobile({ fontSize: "1.4rem" })}
  }
`;

const InputField = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  height: ${(props) => (props.height ? props.height : "4rem")};
  width: 100%;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0.5rem"};
  border: ${(props) =>
    props.focused
      ? "1px solid rgba(0, 0, 255, 0.9)"
      : props.inactive
      ? `1px solid rgba(85, 85, 85, 0.3)`
      : "1px solid rgba(85, 85, 85, 1)"};
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

  font-size: 1.6rem;
  line-height: 1.95rem;
  margin-bottom: 0.8rem;
  display: flex;
  text-transform: capitalize;
  flex-direction: column;
`;

const Icon = styled.i`
  z-index: 50;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;

  ${mobile({ width: "10%" })}
`;

const ErrorMsg = styled.h3`
  color: rgba(255, 0, 0, 1);
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3rem;
  letter-spacing: 0.03em;
  padding-top: 0.5rem;
  width: ${(props) => (props.width ? props.width : "300px")};
`;
