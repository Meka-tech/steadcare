import React from "react";
import styled from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";
import { mobile } from "../../../../../Utilities/responsive";
import { useIsMobile } from "../../../../../hooks/useIsMobile";

export const ChartHeader = ({ setFilter, filter }) => {
  return (
    <Main>
      <FilteredPeriod />
      <Filters>
        <Filter onClick={() => setFilter("YEAR")} active={filter === "YEAR"}>
          YEAR
        </Filter>
        <Filter onClick={() => setFilter("MONTH")} active={filter === "MONTH"}>
          MONTH
        </Filter>
        <Filter onClick={() => setFilter("WEEK")} active={filter === "WEEK"}>
          WEEK
        </Filter>
      </Filters>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  ${mobile({ width: "50%" })}
`;
const Filter = styled.h1`
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: ${(props) => (props.active ? "blue" : "rgba(85, 85, 85, 1)")};
  font-size: 2rem;
  ${mobile({ fontSize: "1.2rem" })}
`;

const FilteredPeriod = () => {
  const IsMobile = useIsMobile();
  return (
    <Dates>
      <AiOutlineCalendar
        size={IsMobile ? 15 : 20}
        color="rgba(85, 85, 85, 1)"
      />
      <FilteredTimePeriod>Jan-Jun</FilteredTimePeriod>
      <FilteredYear>, 2022</FilteredYear>
    </Dates>
  );
};

const Dates = styled.div`
  display: flex;
  align-items: center;
`;
const FilteredTimePeriod = styled.h1`
  font-weight: 500;
  color: blue;
  margin: 0;
  padding: 0;
  margin-left: 1rem;
  font-size: 1.6rem;
  ${mobile({ fontSize: "1.4rem", marginLeft: "0.5rem" })}
`;
const FilteredYear = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  color: blue;
  font-size: 1.6rem;
  color: rgba(85, 85, 85, 1);
  ${mobile({ fontSize: "1.4rem" })}
`;
