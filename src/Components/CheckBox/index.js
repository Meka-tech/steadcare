import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "../../Images/CheckMark.svg";

export const CheckBox = ({ active, toggle }) => {
  return (
    <Container onClick={() => toggle()}>{active ? <Check /> : null}</Container>
  );
};

const Container = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  border: solid 1px rgba(85, 85, 85, 0.8);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
