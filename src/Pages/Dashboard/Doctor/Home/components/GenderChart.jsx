import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";
import { BaseUrl } from "../../../../../Utilities";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../../../../hooks/useFetch";

export const GenderChart = () => {
  const token = useSelector((state) => state.reducer.doctorDetails.token);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  const SetStats = (response) => {
    setMaleCount(response.data.data.males);
    setFemaleCount(response.data.data.females);
  };

  useFetch(token, "/female-male-statistics?year=2022", SetStats);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        ///male ,female
        data: [maleCount, femaleCount],
        backgroundColor: ["blue", "rgba(48, 196, 25, 1)"],
        borderWidth: 0
      }
    ]
  };
  return (
    <Container>
      <HeaderDiv>
        <Header>Gender</Header>
        <CalendarDropdown />
      </HeaderDiv>
      <ChartDiv>
        <ChartImg>
          <Doughnut
            data={data}
            width={140}
            height={140}
            options={{ maintainAspectRatio: false, cutout: 60 }}
          />
        </ChartImg>
        <ChartText>
          <h1>{maleCount + femaleCount}</h1>
          <h2>Patient(s) this year</h2>
        </ChartText>
      </ChartDiv>

      <GendersDiv>
        <Gender>
          <GenderBall color="blue" />
          <div>
            <h1>Male</h1> <h1>{maleCount}</h1>
          </div>
        </Gender>
        <Gender>
          <GenderBall color="rgba(48, 196, 25, 1)" />
          <div>
            <h1>female</h1> <h1>{femaleCount}</h1>
          </div>
        </Gender>
      </GendersDiv>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(236, 242, 246, 1);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 255, 0.8);
  border-radius: 1rem;
  margin-top: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const ChartDiv = styled.div`
  width: 100%;
  height: 15rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
`;
const ChartImg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
`;
const ChartText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 1rem;
  width: 13rem;
  height: 13rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 5rem;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    font-weight: 600;
  }
  h2 {
    text-align: center;
    font-size: 1.1rem;
    margin: 0;
    padding: 0;
    width: 50%;
    color: rgba(85, 85, 85, 1);
    font-weight: 500;
  }
`;

const GendersDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Gender = styled.div`
  display: flex;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;
const GenderBall = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 1rem;
`;

const CalendarDropdown = () => {
  return (
    <DropdownContainer>
      <h1>2022</h1>
      <AiOutlineDown size={10} style={{ cursor: "pointer" }} />
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  color: blue;
  background-color: white;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  box-sizing: border-box;
  padding: 0 0.5rem;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;
