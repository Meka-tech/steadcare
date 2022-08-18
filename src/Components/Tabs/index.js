import React, { useState } from "react";
import styled from "styled-components";

export const SwitchTab = ({ labels = [""], OnSelect, selected }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      {labels.map((label, index) => {
        return (
          <Tab key={index}>
            <Text
              active={selected ? selected === label : index === activeTab}
              onClick={() => {
                setActiveTab(index);
                OnSelect(label);
              }}
            >
              {label}
            </Text>
            <Bar active={selected ? selected === label : index === activeTab} />
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
  height: 0.4rem;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 0.8rem;
  bottom: 0;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.h1`
  margin: 1rem 5rem;
  padding: 0;
  color: ${(props) =>
    props.active ? `rgba(0, 0, 255, 0.9)` : `rgba(85, 85, 85, 0.7)`};
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 700;
`;
const Bar = styled.div`
  width: 100%;
  height: 0.4rem;
  background-color: ${(props) =>
    props.active ? `rgba(0, 0, 255, 0.9)` : `rgba(217, 217, 217, 1)`};
  border-radius: 0.8rem;
  z-index: 2;
`;
