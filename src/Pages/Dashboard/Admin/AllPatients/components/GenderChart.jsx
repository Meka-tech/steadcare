import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState } from "react";

export const GenderChart = () => {
  const token = useSelector((state) => state.reducer.doctorDetails.token);
  const [maleCount, setMaleCount] = useState(120);
  const [femaleCount, setFemaleCount] = useState(30);

  // const SetStats = (response) => {
  //   setMaleCount(response.data.data.males);
  //   setFemaleCount(response.data.data.females);
  // };

  // useFetch(token, "/female-male-statistics?year=2022", SetStats);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        ///male ,female
        data: [maleCount, femaleCount],
        backgroundColor: ["blue", "rgba(119, 119, 119, 1)"],
        borderWidth: 0
      }
    ]
  };
  return (
    <Container>
      <HeaderDiv>
        <Header>Patient Gender</Header>
      </HeaderDiv>
      <ChartDiv>
        <ChartImg>
          <Doughnut
            data={data}
            width={140}
            height={140}
            options={{ maintainAspectRatio: false, cutout: 45 }}
          />
        </ChartImg>
        <ChartText>
          <h1>{(maleCount / (maleCount + femaleCount)) * 100}%</h1>
        </ChartText>
      </ChartDiv>

      <GendersDiv>
        <Gender>
          <GenderBall color="blue" />
          <div>
            <h1>{maleCount}</h1> <h2>Male</h2>
          </div>
        </Gender>
        <Gender>
          <GenderBall color="rgba(119, 119, 119, 1)" />
          <div>
            <h1>{femaleCount}</h1> <h2>female</h2>
          </div>
        </Gender>
      </GendersDiv>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(234, 233, 233, 0.4);
  box-sizing: border-box;
  width: 25rem;
  height: 100%;
  border-radius: 1rem;
  margin-top: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.3);
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
    font-size: 3rem;
    margin: 0;
    padding: 0;
    font-weight: 600;
    color: blue;
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
  flex-direction: column;
  justify-content: space-between;
`;
const Gender = styled.div`
  display: flex;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.2rem;
  }
  margin-bottom: 2rem;
`;
const GenderBall = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.color};
  margin-right: 1rem;
`;
