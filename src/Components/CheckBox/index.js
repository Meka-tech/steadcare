import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "../../Images/CheckMark.svg";

export const CheckBox = ({ active, toggle }) => {
  return (
    <Container onClick={() => toggle()}>{active ? <Check /> : null}</Container>
  );
};

const Container = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.2rem;
  border: solid 0.1rem rgba(85, 85, 85, 0.8);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
