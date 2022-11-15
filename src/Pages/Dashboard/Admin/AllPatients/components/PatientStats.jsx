import React, { useState } from "react";
import styled from "styled-components";
import { GenderChart } from "./GenderChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartHeader } from "./ChartHeader";
import { mobile } from "../../../../../Utilities/responsive";
import { useIsMobile } from "../../../../../hooks/useIsMobile";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

export const PatientStats = () => {
  const [filter, setFilter] = useState("MONTH");

  const SetFilter = (data) => {
    setFilter(data);
  };

  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
  ]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [100, 1000, 200, 810, 506, 420],
        fill: true,
        borderColor: "rgba(0, 0, 255, 0.8)",
        tension: 0.4,
        backgroundColor: "rgba(0, 0, 255, 0.2) "
      }
    ]
  };

  const IsMobile = useIsMobile();
  return (
    <Container>
      <DivTitle>Patient Statistics</DivTitle>
      <Body>
        <Main>
          <Chart>
            <ChartHeader setFilter={SetFilter} filter={filter} />
            <Line options={options} data={data} height={IsMobile ? 200 : ""} />
          </Chart>
          <GenderChart />
        </Main>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
  ${mobile({ width: "95%" })}
`;

const DivTitle = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;
const Body = styled.div`
  width: 100%;
  border: 0.5px solid black;
  height: 50rem;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  ${mobile({ height: "30rem" })}
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  height: 90%;
  align-items: center;
  ${mobile({ width: "98%" })}
`;
const Chart = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  max-width: 80rem;
  box-sizing: border-box;
  ${mobile({ width: "75%" })}
`;
