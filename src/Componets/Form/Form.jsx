import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as EyeIcon } from "../../Images/FormIcons/eyeIcon.svg";
import { ReactComponent as EyeClosedIcon } from "../../Images/FormIcons/eyeClosedIcon.svg";

const Form = ({
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
  const [inputType, setInputType] = useState(type);

  const inputRef = useRef();

  const ToggleShowPassword = () => {
    if (inputType === "password") {
      setInputType("text");
    }
    if (inputType === "text") {
      setInputType("password");
    }
  };

  return (
    <Container ref={inputRef}>
      <Title ref={inputRef}>{title}</Title>
      <Body>
        <InputField
          width={width}
          height={height}
          placeholder={placeholder}
          type={inputType}
        >
          {inputValue}
        </InputField>
        {type === "password" ? (
          inputType === "text" ? (
            <EyeIcon
              onClick={() => ToggleShowPassword()}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <EyeClosedIcon
              onClick={() => ToggleShowPassword()}
              style={{ cursor: "pointer" }}
            />
          )
        ) : (
          <Icon>{icon}</Icon>
        )}
      </Body>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </Container>
  );
};

const Container = styled.div`
  margin: 5px;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const Title = styled.div`
  color: rgba(85, 85, 85, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  margin-bottom: 8px;
`;
const Body = styled.div`
  border: 1px solid;
  width: ${(props) => (props.width ? `${props.width}px` : "220px")};
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  border: 1px solid rgba(85, 85, 85, 1);
  border-radius: 5px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
const InputField = styled.input`
  &[type="password"] {
    font-size: 16px;
    -webkit-text-security: disc;
  }
  outline: none;
  border: none;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: black;
  line-height: 19.5px;
  height: 80%;
  width: 80%;
  &::placeholder {
    color: rgba(75, 72, 78, 0.7);
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
  /* &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 255, 0.9);
  } */
`;

const Icon = styled.div`
  position: absolute;
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
  background-color: transparent;
  right: 10px;
  bottom: 10px;
  overflow: hidden;
`;

const ErrorMsg = styled.div``;
export default Form;
