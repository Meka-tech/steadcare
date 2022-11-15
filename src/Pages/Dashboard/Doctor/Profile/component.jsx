import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../Components";
import { mobile } from "../../../../Utilities/responsive";

export const BioInput = ({ placeHolder, value, title, ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <BioContainer>
      <H1>{title}</H1>
      <BioInputDiv focused={focused}>
        <BioInputField
          placeholder={placeHolder}
          value={value}
          {...rest}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
        />
        <BioButton>
          <Button fontSize={"1.5rem"} text={"Save"} />
        </BioButton>
      </BioInputDiv>
    </BioContainer>
  );
};
const BioContainer = styled.div`
  width: 90%;
  margin: auto;
  ${mobile({ width: "100%" })}
`;
const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const BioInputDiv = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: 0.5rem;
  background-color: rgba(196, 196, 196, 0.1);
  border: ${(props) =>
    props.focused
      ? "1px solid rgba(0, 0, 255, 0.9)"
      : "1px solid rgba(85, 85, 85, 0.3)"};
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 5rem;
  position: relative;
`;
const BioInputField = styled.textarea`
  font-family: Montserrat;
  width: 100%;
  text-align: start;
  background-color: transparent;
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
const BioButton = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 4px;
  right: 4px;
`;
