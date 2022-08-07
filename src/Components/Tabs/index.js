import React, { useState } from "react";
import styled from "styled-components";

export const SwitchTab = ({ labels = [""], OnSelect }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      {labels.map((label, index) => {
        return (
          <Tab key={index}>
            <Text
              active={index === activeTab}
              onClick={() => {
                setActiveTab(index);
                OnSelect(label);
              }}
            >
              {label}
            </Text>
            <Bar active={index === activeTab} />
          </Tab>
        );
      })}

      <ContainerBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-around;
  position: relative;
  transition: all 0.2s ease-in-out;
`;
const ContainerBar = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 8px;
  bottom: 0;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.h1`
  margin: 10px 50px;
  padding: 0;
  color: ${(props) =>
    props.active ? `rgba(0, 0, 255, 0.9)` : `rgba(85, 85, 85, 0.7)`};
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
`;
const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${(props) =>
    props.active ? `rgba(0, 0, 255, 0.9)` : `rgba(217, 217, 217, 1)`};
  border-radius: 8px;
  z-index: 2;
`;
